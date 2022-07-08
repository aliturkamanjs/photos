import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layout'
import { QueryClientProvider, QueryClient } from 'react-query'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Layout>
  )
}

export default MyApp
