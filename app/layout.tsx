import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Winners Media - Empowering Your Brand To Win',
  description: 'Professional digital agency specializing in social media management, sports media, content creation, and branding for the US market.',
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

