"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/styles/styles.css';
import LamacNavbar from '../components/LamacNavbar/LamacNavbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LamacNavbar />
        {children}
      </body>
    </html>
  )
}
