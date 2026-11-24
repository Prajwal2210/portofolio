import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Prajwal Padasalgi | Software Developer Portfolio",
  description:
    "Portfolio of Prajwal Padasalgi, an MCA graduate and aspiring Software Developer in Bengaluru building full-stack, AI-powered and cloud-based applications with Python, React.js, Node.js and AWS.",
  keywords: [
    "Prajwal Padasalgi",
    "Software Developer",
    "Full Stack Developer",
    "Python Developer",
    "React.js",
    "Node.js",
    "AWS",
    "Bengaluru",
  ],
  authors: [{ name: "Prajwal Padasalgi" }],
  openGraph: {
    title: "Prajwal Padasalgi | Software Developer Portfolio",
    description: "Full-stack, AI-powered and cloud-based projects by Prajwal Padasalgi.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1022" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8fc" },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster richColors position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
