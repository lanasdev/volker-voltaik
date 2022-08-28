import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="black px-6 md:px-0">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
