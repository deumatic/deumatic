import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Inter, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site, team } from "@/data/site";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: "Deumatic | Software Development & AI Automation Company",
    template: "%s | Deumatic"
  },
  description: site.description,
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "custom software development company",
    "web application development services",
    "mobile app development company",
    "AI automation company",
    "full stack development services",
    "digital product design",
    "product strategy consulting"
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }]
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Deumatic | Software Development & AI Automation Company",
    description: site.description,
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Deumatic digital product and technology partner" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Deumatic | Software Development & AI Automation Company",
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

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const logoId = `${site.url}/#logo`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.name,
      url: site.url,
      description: site.description,
      slogan: site.tagline,
      foundingDate: site.foundingDate,
      email: site.email,
      sameAs: [site.github],
      logo: {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${site.url}/brand/deumatic-icon.png`,
        contentUrl: `${site.url}/brand/deumatic-icon.png`,
        width: 1536,
        height: 1536,
        caption: "Deumatic"
      },
      image: { "@id": logoId },
      areaServed: "Worldwide",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales and project enquiries",
        email: site.email,
        areaServed: "Worldwide",
        availableLanguage: ["English"]
      },
      knowsAbout: [
        "Product strategy",
        "Experience design",
        "Custom software development",
        "Web application development",
        "Mobile application development",
        "Artificial intelligence",
        "Workflow automation",
        "Cloud platform engineering",
        "Digital growth"
      ],
      member: team.map((member) => ({
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        url: member.linkedIn,
        sameAs: [member.linkedIn]
      }))
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: site.url,
      name: site.name,
      description: site.description,
      inLanguage: "en",
      publisher: { "@id": organizationId }
    }
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
