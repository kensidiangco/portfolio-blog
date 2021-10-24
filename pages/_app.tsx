import '../styles/globals.css'
import Navigation from '../components/navigation'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navigation />
        <div className="bg-light dark:bg-dark">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}
export default MyApp
