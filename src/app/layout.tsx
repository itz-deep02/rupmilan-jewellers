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
  title: "Rupmilan Jewellers",
  description:
    "Premium jewellery store in Champa, Chhattisgarh. BIS Hallmarked. Trusted since 1988.",
  icons: { icon: "/icon.png" },
  verification: {
    google: "0oU1MQ1PDp_l6tHImTt1TUFW7iqnrka1evBkj-FLn0Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${playfair.variable} ${jost.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-ivory">
        {children}
      </body>
    </html>
  );
}
