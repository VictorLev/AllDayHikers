import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './globals.css'
import ProductProvider from '@/providers/product-provider'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'All day Hikers',
  description: 'Front-end Demo site for portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <ProductProvider />
        {children}
        </body>
    </html>
  )
}
