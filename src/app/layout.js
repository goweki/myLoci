import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "myLoci | %s",
    default: "MyLoci Dashboard", // a default is required when creating a template
  },
  description: "The unified security Dashboard",
  keywords: ["security", "home", "monitor"],
  robots: {
    index: true,
    follow: true,
    // nocache: true,
    // googleBot: {
    //   index: true,
    //   follow: true,
    //   noimageindex: true,
    //   'max-video-preview': -1,
    //   'max-image-preview': 'large',
    //   'max-snippet': -1,
    // },
  },
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  images: ["https://defioffroads.co.ke/brand/defi-card.jpg"],
  openGraph: {
    title: "DEFI Motors & Autoworks",
    description: "Cars, parts and services that go beyond urban trails",
    url: "https://defioffroads.co.ke",
    siteName: "DEFI Motors/Autoworks",
    images: ["https://defioffroads.co.ke/brand/defi-card.jpg"],
    // locale: 'en_US',
    type: "website",
  },
};

import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
