import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import cn from "classnames";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import localFont from "@next/font/local";
import Topbar from "./Topbar";

const prompt = localFont({
  src: "./../public/fonts/Prompt-SemiBold.ttf",
  weight: "600",
  style: "normal",
});

const inter = localFont({
  src: "./../public/fonts/Inter.var.woff2",
});

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Volker Voltaik" }: Props) => (
  <div className={cn("bg-white text-black", inter.className)}>
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
    </Head>
    <Topbar />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
