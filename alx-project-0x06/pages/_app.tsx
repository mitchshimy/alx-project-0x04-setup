import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import { Provider } from "react-redux";       // <-- import Redux Provider
import store from "@/store/store";             // <-- import your Redux store

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>                   {/* Redux provider wraps everything */}
      <CountProvider>                          {/* Your custom context */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountProvider>
    </Provider>
  )
}
