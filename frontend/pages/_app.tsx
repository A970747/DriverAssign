import { AppProps } from 'next/app';
import { Router } from 'next/dist/client/router';
import NProgress from 'nprogress';
import React from 'react';
import Layout from '../components/Layout';
import '../styles/index.css';
import '../styles/nprogress.css';


Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
