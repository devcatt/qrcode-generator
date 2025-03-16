import "./globals.css"

export const metadata = {
  title: "qr code generator"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
    return (
      <html>
        <body>
          {children}
        </body>
      </html>
    )
}