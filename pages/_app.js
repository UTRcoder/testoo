import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GlocalEdit-like — Video Editing Studio</title>
        <meta name="description" content="Ultimate video editing — upload, preview, and manage video edits." />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/site-icon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
