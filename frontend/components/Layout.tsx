import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from './Header';

type Props = {
  children?: ReactNode,
}

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <title>Driver Assigner</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Header />
    <div className="max-w-screen-lg my-0 mx-auto p-8">
      {children}
    </div>
  </div>
);

export default Layout;
