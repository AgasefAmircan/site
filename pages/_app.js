import React from "react";
import Head from "next/head";
import "../styles/main.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
     <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
