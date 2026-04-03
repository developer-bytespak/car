import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Superior Shine Auto Detailing | Professional Mobile Car Detailing',
  description:
    'Professional mobile auto detailing — we come to you. Basic Shine $99 | Premium Detail $189 | Ultimate Detail $299+. Satisfaction guaranteed.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-light-bg text-body" suppressHydrationWarning>{children}</body>
    </html>
  )
}
