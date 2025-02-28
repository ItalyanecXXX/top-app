import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JSX } from "react";
import Head from "next/head";
import React from "react";
// import { AppProps } from 'next/dist/shared/lib/router/router';

// export default function App({ Component, pageProps }: AppProps): JSX.Element {
//   return <Component {...pageProps} />;
// }

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <meta name="description" content="My Next-React app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
