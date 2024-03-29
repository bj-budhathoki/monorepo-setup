import './globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body>{children}</body>
  </html>
)

export default RootLayout
