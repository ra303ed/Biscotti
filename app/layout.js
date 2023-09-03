import Navbar from '@/components/Navbar'
import './globals.css'
import { Sail } from 'next/font/google'
const inter = Sail({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Biscotti | Photgraphy',
  description: 'Biscotti-Photgraphy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
