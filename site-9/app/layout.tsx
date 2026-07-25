import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import "./globals.css";
import CompareNav from "./compare-nav";
import ScrollFX from "./scroll-fx";

const display = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";
const title = "רוח נתנאל | מגיעים מוכנים לשירות משמעותי";
const description =
  "מסגרת הכנה לצעירים חרדים שמחברת כושר קרבי, חוסן מנטלי, הכוונה אישית וזהות — בדרך לשירות משמעותי.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: `${basePath}/logo.jpeg`,
    shortcut: `${basePath}/logo.jpeg`,
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1672,
        height: 941,
        alt: "רוח נתנאל — אמונה, מוכנות, שליחות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body>
        <CompareNav />
        <ScrollFX />
        {children}
      </body>
    </html>
  );
}
