import type { Metadata } from "next";
import { Emblema_One, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const emblemaOne = Emblema_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-emblema-one",
});

export const metadata: Metadata = {
  title: "Claire Burke",
  description: "A designer and developer creating for positive impact.",
};

metadata.openGraph = {
  images: [
    {
      url: "./about/headshot.jpg",
      width: 800,
      height: 600,
      alt: "Claire Burke Headshot",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-14B5S8FHZJ"></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-14B5S8FHZJ');
        `}
        </Script>
      </head>
      <body className={`${inter.variable} ${emblemaOne.variable} antialiased`}>{children}</body>
    </html>
  );
}
