import { AppProps } from "next/app";
import "@shared/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta lang="pt-BR" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
