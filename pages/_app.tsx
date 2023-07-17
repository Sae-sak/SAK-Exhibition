import "../styles/globals.css";
import "../styles/font.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { Provider } from "react-redux";
import { store } from "@toolkit/store";
import Cursor from "@components/Cursor";
import Script from "next/script";
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
  const ga_key = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

  return (
    <>
      <Head>
        <title>SAK Exhibition</title>
        <meta
          name="description"
          content="SAK Exhibition - 2023 경기대학교 건축학과 온라인 졸업 전시 웹사이트"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#FBFBFB" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        {/* Naver Site Verification*/}
        <meta
          name="naver-site-verification"
          content={process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION}
        />

        {/* Google Site Verification*/}
        <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_key}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_key}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`}
        defer
      ></Script>

      <ThemeProvider attribute="class">
        <Provider store={store}>
          <main className=" ">
            <Cursor />
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </main>
        </Provider>
      </ThemeProvider>
    </>
  );
}
