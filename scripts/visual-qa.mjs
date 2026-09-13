import { chromium } from "file:///C:/Users/MMLaptops.com/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4310";
const outputDir = "./qa";
const routes = ["/", "/services", "/work", "/about", "/contact", "/privacy"];
const browser = await chromium.launch({ headless: true });
const results = [];

await mkdir(outputDir, { recursive: true });

for (const route of routes) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  const heading = await page.locator("h1").first().textContent();
  results.push({ route, status: response?.status(), heading, errors });
  if (route === "/") {
    await page.screenshot({ path: `${outputDir}/home-desktop-hero.png` });
    await page.screenshot({ path: `${outputDir}/home-desktop.png`, fullPage: true });
  }
  if (route === "/work") {
    const supportImages = await page.locator("#supportos img").count();
    results.at(-1).supportImages = supportImages;
  }
  await page.close();
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto(baseUrl, { waitUntil: "networkidle" });
await mobile.locator(".menu-button").click();
const mobileMenuVisible = await mobile.locator("#mobile-navigation").evaluate((element) => getComputedStyle(element).visibility === "visible");
await mobile.locator(".menu-button").click();
await mobile.waitForTimeout(350);
await mobile.screenshot({ path: `${outputDir}/home-mobile-hero.png` });
await mobile.screenshot({ path: `${outputDir}/home-mobile.png`, fullPage: true });

const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
results.push({ route: "mobile-home", status: 200, heading: "responsive check", errors: [], mobileMenuVisible, horizontalOverflow: overflow });

await browser.close();
console.log(JSON.stringify(results, null, 2));
