import './globals.css'
import siteData from '../content/site-data.json'
import { DeeshaBadge } from '../components/deesha-badge'

export const metadata = {
  title: siteData.business.name,
  description: siteData.business.tagline,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <DeeshaBadge />
      </body>
    </html>
  )
}
