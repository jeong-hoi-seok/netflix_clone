import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../utils/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name='viewport' content='initial-scale=1, width=devic-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default MyApp
