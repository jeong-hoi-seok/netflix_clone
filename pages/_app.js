import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name='viewport' content='initial-scale=1, width=devic-width' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
