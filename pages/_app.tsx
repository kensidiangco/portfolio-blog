import "tailwindcss/tailwind.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans">

      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
