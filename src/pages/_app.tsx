import { AppProps } from 'next/app'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touchicon" href="/img/icon-512.png" />
        <link rel="manifest" href="/public/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with typescript, react and nextJS"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>{' '}
    </>
  )
}

export default App
