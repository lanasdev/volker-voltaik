import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import cn from "classnames";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import Topbar from "./Topbar";
import FooterImage from "./FooterImage";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Volker Voltaik" }: Props) => (
  <div className={cn("bg-white text-black")}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Die Volker Voltaik GmbH steht Ihnen in allen Fragen zu Photovoltaik zu Verfügung. Unser Untenehmen bietet weit mehr als 50 Jahre Erfahrung in der Montage und Planung von Anlagen."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FAFDFF" />
      <meta name="msapplication-TileColor" content="#FAFDFF" />
      <meta name="theme-color" content="#FAFDFF" />
      <meta property="og:url" content="https://volker.lanas.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Volker Voltaik" />
      <meta
        property="og:description"
        content="Installation von Photovoltaikanlagen, Stromspeicher und Umwelzpumpen"
      />
      <meta
        property="og:image"
        content="https://volker.lanas.dev/img/volker-screen.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="volker.lanas.dev" />
      <meta property="twitter:url" content="https://volker.lanas.dev/" />
      <meta name="twitter:title" content="Volker Voltaik" />
      <meta
        name="twitter:description"
        content="Installation von Photovoltaikanlagen, Stromspeicher und Umwelzpumpen"
      />
      <meta
        name="twitter:image"
        content="https://volker.lanas.dev/img/volker-screen.png"
      />
    </Head>
    {/* <Topbar /> */}
    <Navbar />
    {children}
    <FooterImage />
    <Footer />
  </div>
);

export default Layout;
