import "../styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import { store } from "@toolkit/store";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>SAK Exhibition</title>
        <meta
          name="description"
          content="SAK Exhibition Generated by Sae-sak"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#FBFBFB" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Head>

      <ThemeProvider attribute="class">
        <Provider store={store}>
          <main>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </main>
        </Provider>
      </ThemeProvider>
    </>
  );
}
