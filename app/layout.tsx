import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Web Rendering Demo",
  description: "SSR vs CSR vs SSG"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="navbar">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/products-ssr">SSR</Link>
          <Link href="/products-ssg">SSG</Link>
        </div>
        <div className="container">{children}</div>
      </body>
    </html>
  )
}