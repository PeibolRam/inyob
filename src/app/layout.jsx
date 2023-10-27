import Navbar from '../components/Navbar'

import '../styles/global.css'

export const metadata = {
  title: 'Inyob',
  description: 'Encuentra empleo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
