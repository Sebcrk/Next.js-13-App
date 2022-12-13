import Navigation from '../components/Navigation'
import { Space_Grotesk as spaceGrotesk } from '@next/font/google'
import '../styles/globals.css'

const font = spaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
