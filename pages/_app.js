import React from 'react';
import '../styles/reset.css'; 
import "@fontsource/roboto-mono/500.css"; /* Weight 500. */
import '@fontsource/lato/400.css'; // Weight 400.
import '@fontsource/shadows-into-light'; // Defaults to weight 400.



// This function takes two arguments, Component and pageProps
function MyApp({ Component, pageProps }) {
  // This is where you can add global components like headers or footers that are common across all pages
  return <Component {...pageProps} />;
}

export default MyApp;
