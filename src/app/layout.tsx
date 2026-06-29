import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Good Food Cafe | Nature's Basket Artisan Pantry, Bengaluru",
  description:
    "Experience gourmet comfort food at The Good Food Cafe inside Nature's Basket Artisan Pantry on MG Road, Bengaluru. Fresh ingredients, artisan recipes, premium coffee.",
  keywords: [
    "Good Food Cafe",
    "Nature's Basket",
    "MG Road Bengaluru",
    "Artisan Cafe",
    "Healthy Food Bangalore",
    "Premium Cafe Bangalore",
  ],
  openGraph: {
    title: "The Good Food Cafe | Nature's Basket Artisan Pantry",
    description:
      "Where gourmet meets everyday comfort. Fresh, artisan food in the heart of MG Road, Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body className="antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
