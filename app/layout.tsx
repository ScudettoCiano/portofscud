import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Scudetto Ciano Syam - Portfolio',
  description: 'Information Systems student at Universitas Indonesia with expertise in data analytics and data science. View my projects, experience, and skills.',
  generator: 'Next.js',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
