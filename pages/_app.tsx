import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Fragment } from "react";
import Script from "next/script";
import { Inter, Prompt } from "next/font/google";
import cn from "classnames";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const prompt = Prompt({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-prompt",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <div className={cn(inter.variable, "font-sans", prompt.variable)}>
        <Component {...pageProps} />
      </div>
      <Script src="https://sa.lanas.dev/latest.js" />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://sa.lanas.dev/noscript.gi"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </Fragment>
  );
}

export default MyApp;
