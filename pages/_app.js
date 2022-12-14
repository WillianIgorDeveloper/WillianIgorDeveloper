import { Navbar } from '../components/Navbar'
import { ThemeProvider } from '../contexts/ThemeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
