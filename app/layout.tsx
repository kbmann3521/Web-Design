import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'High Rockies Web Design - Custom Websites for Your Business',
  description: 'Premium website design services in Steamboat Springs. Get a free custom website managed for $59/month.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
