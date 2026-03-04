import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Burnout Index',
  description: 'Burnout assessment and recovery plan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
