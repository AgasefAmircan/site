import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import "custom-cursor-react/dist/index.css";
import "../styles/main.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};

export default App;
