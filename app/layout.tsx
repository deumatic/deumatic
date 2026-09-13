import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Deumatic | Digital Product and Technology Partner",
    template: "%s | Deumatic"
  },
  description: site.description,
  keywords: [
    "digital product development",
    "software engineering company",
    "web application development",
    "mobile application development",
    "AI automation services",
    "product design",
    "digital growth"
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }]
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Deumatic | Digital Product and Technology Partner",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic digital product and technology partner" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Deumatic | Digital Product and Technology Partner",
    description: site.description,
    images: ["/opengraph-image"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F2EA",
  colorScheme: "light"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/deumatic-icon.png`,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  knowsAbout: [
    "Product strategy",
    "Experience design",
    "Software engineering",
    "Web development",
    "Mobile application development",
    "Artificial intelligence",
    "Workflow automation",
    "Digital growth"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
