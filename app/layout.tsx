import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'LOTUS GLOBAL — Where Vision Blooms Into Global Success',
  description: 'LOTUS GLOBAL — Digital agency specializing in social media, paid media, sports content, and branding. Based in Hanoi, Vietnam.',
  icons: {
    icon: '/logo/z6987337498761_a7b6023218583daf41a0eba65964b593-Photoroom.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

