import React from "react";
import { AppProps } from "next/app";
import { wrapper } from "../redux";
import '../styles/globals.css'

interface Props {
}

function TodoApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(TodoApp);
