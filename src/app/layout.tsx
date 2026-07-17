import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rupmilanjewellers.com"),
  title: "Rupmilan Jewellers",
  description:
    "Premium jewellery store in Sarafa Bazar, Champa, Chhattisgarh — known as Sharda Prasad Bitawan Sao Rupmilan Jewellers. BIS Hallmarked. Trusted since 1988.",
  icons: { icon: "/icon.png" },
  verification: {
    google: "0oU1MQ1PDp_l6tHImTt1TUFW7iqnrka1evBkj-FLn0Q",
  },
  openGraph: {
    siteName: "Rupmilan Jewellers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rupmilan Jewellers - Exquisite Craftsmanship Since 1988",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupmilan Jewellers",
    description:
      "Premium jewellery store in Champa, Chhattisgarh. BIS Hallmarked. Trusted since 1988.",
    images: ["/og-image.jpg"],
  },
};

const jewelryStoreSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Rupmilan Jewellers",
  alternateName: [
    "Sharda Prasad Bitawan Sao Rupmilan Jewellers",
    "Sharda Prasad Bitawan Sao",
  ],
  url: "https://www.rupmilanjewellers.com",
  image: "https://www.rupmilanjewellers.com/og-image.jpg",
  description:
    "Premium jewellery store in Champa, Chhattisgarh, known as Sharda Prasad Bitawan Sao Rupmilan Jewellers. BIS Hallmarked gold, silver and diamond jewellery. Trusted since 1988.",
  foundingDate: "1988",
  founder: {
    "@type": "Person",
    name: "Late Shri Sharda Prasad Bitawan Sao",
  },
  telephone: "+919826540190",
  email: "rupmilanjewellers@gmail.com",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Samleshwari Mandir, Sarafa Bazar, Sonar Para",
    addressLocality: "Champa",
    addressRegion: "Chhattisgarh",
    postalCode: "495671",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${jost.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
