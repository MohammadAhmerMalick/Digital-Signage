import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'

import 'styles/globals.scss'
import { store } from 'store'
import DefaultLayout from 'layout/DefaultLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </Provider>
  )
}

export default MyApp
