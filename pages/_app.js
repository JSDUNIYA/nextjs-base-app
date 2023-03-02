import '../styles/global.css';
import React from 'react';

import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <App Component={Component} pageProps={pageProps} />
}

export default MyApp
