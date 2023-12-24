import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "myLoci | %s",
    default: "MyLoci Dashboard", // a default is required when creating a template
  },
  description: "The unified Security Systems Dashboard",
  applicationName: "myLoci",
  referrer: "origin-when-cross-origin",
  creator: "goweki.com",
  keywords: ["security", "home", "monitor"],
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  images: ["https://i.postimg.cc/Hk7yxsPN/og-metadata-image.jpg"],
  openGraph: {
    title: "MyLoci Dashboard",
    description: "The unified Security Systems Dashboard",
    url:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.CONICAL_URL,
    siteName: "myLoci",
    images: [
      {
        url: "https://i.postimg.cc/Hk7yxsPN/og-metadata-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      // "max-video-preview": -1,
      // "max-image-preview": "large",
      // "max-snippet": -1,
    },
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
