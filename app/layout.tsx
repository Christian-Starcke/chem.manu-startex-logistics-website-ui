import type React from "react"
import type { Metadata } from "next"
import { Roboto_Slab, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "StarTex - Drayage & Short-Haul Broker | Houston & Raleigh",
  description:
    "StarTex provides drayage and short-haul brokerage services for chemicals and industrial cargo across the Southeast and Gulf Coast. Houston, TX and Raleigh, NC.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSlab.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
