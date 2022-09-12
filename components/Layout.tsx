import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <meta name="description" content="Die Volker Voltaik GmbH steht Ihnen in allen Fragen zu Photovoltaik zu Verfügung. Unser Untenehmen bietet weit mehr als 50 Jahre Erfahrung in der Montage und Planung von Anlagen." />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
