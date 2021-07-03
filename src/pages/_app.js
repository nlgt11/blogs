import App from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { createContext } from 'react';

import { getStrapiMedia } from 'lib/media';
import { fetchAPI } from 'lib/api';
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
