import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Navbar from "components/Navbar";
import Contact from "components/Contact";
import Footer from "components/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Volker Voltaik" }: Props) => (
  <div>
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
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffb70a" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Navbar />
    {children}
    <Contact />
    <Footer />
  </div>
);

export default Layout;
