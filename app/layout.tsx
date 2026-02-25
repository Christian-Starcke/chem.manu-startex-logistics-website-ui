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
  title: "StarTex Logistics - Chemical Manufacturing Freight | Gulf Coast & Southeast",
  description:
    "StarTex Logistics specializes in chemical manufacturing operational freight transportation. Freight brokerage, managed transportation, and 3PL services for chemical manufacturers across the Gulf Coast and Southeast regions.",
  generator: "v0.app",
  // Next.js automatically detects icon.png and apple-icon.png in the app directory
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
