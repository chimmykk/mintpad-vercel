import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-prodiver'
import Navbar from '@/components/navbar'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import GraphikMedium from 'next/font/local'
import GraphikSemibold from 'next/font/local'
import GraphikBold from 'next/font/local'
import GraphikRegular from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const graphikMedium = GraphikMedium({ src: '../public/fonts/GraphikMedium.woff2', variable: "--font-GraphikMedium" })
const graphikRegular = GraphikRegular({ src: '../public/fonts/GraphikRegular.woff2', variable: "--font-GraphikRegular" })
const graphikSemibold = GraphikSemibold({ src: '../public/fonts/GraphikSemibold.woff2', variable: "--font-GraphikSemibold" })
const graphikBold = GraphikBold({ src: '../public/fonts/GraphikBold.woff2', variable: "--font-GraphikBold" })

export const metadata: Metadata = {
  title: 'Mintpad App',
  description: 'The easiest way to launch your NFT collection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${graphikMedium.variable} ${graphikRegular.variable} ${graphikSemibold.variable} ${graphikBold.variable} font-graphikMedium  bg-bgDark duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <Navbar />
          {/* <ThemeSwitcher /> */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
