import './globals.css'
import ThreeBackground from './components/ThreeBackground.jsx'
import LayoutWrapper from './components/LayoutWrapper.jsx'

export const metadata = {
  title: 'Yohannes Amsalu | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <div className="relative min-h-screen flex flex-col">
          <div className="absolute inset-0 -z-10">
            <ThreeBackground />
          </div>
          <div className="relative z-10 flex-1">
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </div>
        </div>
      </body>
    </html>
  )
}