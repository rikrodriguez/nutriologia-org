import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nutriologia.org/#organization",
      name: "Nutriología",
      url: "https://nutriologia.org",
      logo: "https://nutriologia.org/icon.svg",
      sameAs: ["https://www.skool.com/nutriologia/about"],
    },
    {
      "@type": "WebSite",
      "@id": "https://nutriologia.org/#website",
      url: "https://nutriologia.org",
      name: "Nutriología",
      description: "Nutrición clínica basada en evidencia para tu vida real.",
      publisher: { "@id": "https://nutriologia.org/#organization" },
      inLanguage: "es",
    },
    {
      "@type": "Product",
      "@id": "https://nutriologia.org/#membership",
      name: "Membresía Nutriología",
      description: "Membresía en Skool con recetas, guías clínicas, recursos, comunidad, cursos básicos y llamadas semanales.",
      brand: { "@id": "https://nutriologia.org/#organization" },
      offers: {
        "@type": "Offer",
        price: "29",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://www.skool.com/nutriologia/about",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nutriologia.org"),
  title: {
    default: "Nutriología | Nutrición clínica basada en evidencia",
    template: "%s | Nutriología",
  },
  description:
    "Recetas, guías clínicas, comunidad y acompañamiento semanal para aprender qué comer con claridad.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nutriología | Nutrición clínica basada en evidencia",
    description:
      "Recetas, guías clínicas, comunidad y acompañamiento semanal para aprender qué comer con claridad.",
    url: "https://nutriologia.org",
    siteName: "Nutriología",
    locale: "es",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutriología | Nutrición clínica basada en evidencia",
    description:
      "Recetas, guías clínicas, comunidad y acompañamiento semanal para aprender qué comer con claridad.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
