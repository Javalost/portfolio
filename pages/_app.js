import React from 'react';
import '../styles/reset.css'; 

// This function takes two arguments, Component and pageProps
function MyApp({ Component, pageProps }) {
  // This is where you can add global components like headers or footers that are common across all pages
  return <Component {...pageProps} />;
}

export default MyApp;
