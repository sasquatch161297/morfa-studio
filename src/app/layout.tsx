import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/navigation/Header";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-serif", display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://morfa.studio"),
  title: { default: "MORFA Studio — Objects Formed by Nature", template: "%s — MORFA Studio" },
  description: "MORFA observes how nature builds and transforms those principles into objects for living. Contemporary furniture designed in Costa Rica.",
  keywords: ["collectible design", "contemporary furniture", "Costa Rica design", "sculptural furniture"],
  openGraph: { title: "MORFA Studio", description: "Formed by nature. Made for living.", images: ["/images/products/lactarius/hero.png"], type: "website" },
  twitter: { card: "summary_large_image", title: "MORFA Studio", description: "Formed by nature. Made for living.", images: ["/images/products/lactarius/hero.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "Organization", name: "MORFA Studio", url: "https://morfa.studio", slogan: "Formed by nature. Made for living.", address: { "@type": "PostalAddress", addressCountry: "CR" } };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
