import { chromium } from "file:///C:/Users/MMLaptops.com/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.QA_BASE_URL ?? "http://127.0.0.1:4310";
const outputDir = "./qa";
const routes = ["/", "/services", "/services/ai-ml-engineering", "/solutions", "/solutions/pos-saudi-arabia", "/work", "/about", "/contact", "/privacy"];
const browser = await chromium.launch({ headless: true });
const results = [];

await mkdir(outputDir, { recursive: true });

async function openPage(route, width = 1440, height = 1000) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  const errors = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));
  const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle" });
  const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  return { page, response, errors, horizontalOverflow };
}

for (const route of routes) {
  const { page, response, errors, horizontalOverflow } = await openPage(route);
  const heading = await page.locator("h1").first().textContent();
  const bodyText = await page.locator("body").innerText();
  const result = {
    route,
    status: response?.status(),
    heading,
    errors,
    horizontalOverflow,
    exposedNumericalPrice: /\b(?:SAR|US\$)\s*[\d,]+/i.test(bodyText)
  };

  if (route === "/") {
    result.outcomeCategories = await page.locator(".home-outcome-grid > a").count();
    await page.screenshot({ path: `${outputDir}/home-desktop.png`, fullPage: true });
  }
  if (route === "/services") {
    result.serviceCards = await page.locator(".individual-service-card").count();
    await page.screenshot({ path: `${outputDir}/services-desktop.png`, fullPage: true });
  }
  if (route === "/services/ai-ml-engineering") {
    result.aiServiceGroups = await page.locator(".ai-service-group").count();
    result.aiServiceCards = await page.locator(".ai-service-card").count();
  }
  if (route === "/solutions") {
    result.solutionCategories = await page.locator(".solution-category-card").count();
    result.packageCards = await page.locator(".solution-package-card").count();
    await page.screenshot({ path: `${outputDir}/solutions-desktop.png`, fullPage: true });
  }
  if (route === "/solutions/pos-saudi-arabia") {
    result.posPackages = await page.locator(".pos-option-card").count();
    result.posServices = await page.locator(".pos-service-list article").count();
    await page.screenshot({ path: `${outputDir}/pos-desktop.png`, fullPage: true });
  }
  if (route === "/work") result.supportImages = await page.locator("#supportos img").count();
  if (route === "/about") result.teamCards = await page.locator(".team-card").count();
  results.push(result);
  await page.close();
}

const serviceSearch = await openPage("/services");
await serviceSearch.page.locator(".service-search input").fill("cashier");
results.push({
  route: "service-search",
  status: serviceSearch.response?.status(),
  errors: serviceSearch.errors,
  resultCards: await serviceSearch.page.locator(".individual-service-card").count()
});
await serviceSearch.page.close();

const serviceFilters = await openPage("/services");
const filterChecks = {};
for (const button of await serviceFilters.page.locator(".service-category-tabs button").all()) {
  const label = (await button.textContent())?.trim() ?? "unknown";
  await button.click();
  filterChecks[label] = await serviceFilters.page.locator(".individual-service-card").count();
}
results.push({ route: "service-filters", status: serviceFilters.response?.status(), errors: serviceFilters.errors, filterChecks });
await serviceFilters.page.close();

const categorySelection = await openPage("/solutions");
await Promise.all([
  categorySelection.page.waitForURL(/category=pos/),
  categorySelection.page.locator('a[href="/solutions?category=pos#packages"]').click()
]);
await categorySelection.page.waitForLoadState("networkidle");
results.push({
  route: "solution-category-selection",
  status: 200,
  errors: categorySelection.errors,
  url: categorySelection.page.url(),
  packageCards: await categorySelection.page.locator(".solution-package-card").count()
});
await categorySelection.page.close();

const guide = await openPage("/solutions");
for (const label of ["Show my CV and work", "A new project", "A complete solution", "Nothing specific yet"]) {
  await guide.page.getByRole("button", { name: label, exact: true }).click();
}
results.push({
  route: "solution-guide",
  status: guide.response?.status(),
  errors: guide.errors,
  recommendation: await guide.page.locator(".solution-guide-result h3").textContent(),
  enquiryHref: await guide.page.locator('.solution-guide-result-actions a[href^="/contact"]').getAttribute("href")
});
await guide.page.close();

const guideNavigation = await openPage("/solutions");
await guideNavigation.page.getByRole("button", { name: "Show my CV and work", exact: true }).click();
await guideNavigation.page.getByRole("button", { name: "Back", exact: true }).click();
const returnedQuestion = await guideNavigation.page.locator(".solution-guide legend").textContent();
await guideNavigation.page.getByRole("button", { name: "Skip this question", exact: true }).click();
results.push({ route: "solution-guide-navigation", status: guideNavigation.response?.status(), errors: guideNavigation.errors, returnedQuestion, stepAfterSkip: await guideNavigation.page.locator(".solution-guide-progress span").textContent() });
await guideNavigation.page.close();

const contact = await openPage("/contact?selection=New%20POS%20Setup");
results.push({
  route: "contact-prefill-pos",
  status: contact.response?.status(),
  errors: contact.errors,
  selectedValue: await contact.page.locator('select[name="need"]').inputValue(),
  posFields: await contact.page.locator(".pos-enquiry-fields").count()
});
await contact.page.close();

const contactValidation = await openPage("/contact?selection=Business%20Website");
await contactValidation.page.locator('input[name="name"]').fill("Test visitor");
await contactValidation.page.locator('textarea[name="message"]').fill("Test requirement");
await contactValidation.page.getByRole("button", { name: /Prepare enquiry email/ }).click();
results.push({ route: "contact-validation", status: contactValidation.response?.status(), errors: contactValidation.errors, validationMessage: await contactValidation.page.locator(".form-error").textContent() });
await contactValidation.page.close();

const mobile = await openPage("/", 390, 844);
await mobile.page.locator(".menu-button").click();
await mobile.page.waitForTimeout(300);
const mobileMenuVisible = await mobile.page.locator("#mobile-navigation").evaluate((element) => getComputedStyle(element).visibility === "visible");
results.push({ route: "mobile-menu", status: mobile.response?.status(), errors: mobile.errors, mobileMenuVisible, horizontalOverflow: mobile.horizontalOverflow });
await mobile.page.close();

for (const width of [320, 375, 768, 1024, 1440]) {
  for (const route of ["/services", "/solutions", "/solutions/pos-saudi-arabia", "/contact?selection=New%20POS%20Setup"]) {
    const check = await openPage(route, width, 900);
    const result = { route: `${route}@${width}`, status: check.response?.status(), errors: check.errors, horizontalOverflow: check.horizontalOverflow };
    results.push(result);
    if (route === "/solutions" && width === 375) await check.page.screenshot({ path: `${outputDir}/solutions-mobile.png`, fullPage: true });
    if (route === "/services" && width === 375) await check.page.screenshot({ path: `${outputDir}/services-mobile.png`, fullPage: true });
    if (route === "/solutions/pos-saudi-arabia" && width === 375) await check.page.screenshot({ path: `${outputDir}/pos-mobile.png`, fullPage: true });
    await check.page.close();
  }
}

await browser.close();
console.log(JSON.stringify(results, null, 2));
