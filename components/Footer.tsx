import Link from "next/link";
import Image from "next/image";

import ImgLogo from "img/Logo.png";

import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import SectionContainer from "components/SectionContainer";

const FooterData = [
  // {
  //     title: "Home",
  //     href: "/",
  //     children: []
  // },
  {
    title: "Leistungen",
    href: "/leistungen",
    children: [
      {
        title: "Photovoltaik",
        href: "/leistungen/photovoltaik",
      },
      {
        title: "Wallboxen",
        href: "/leistungen/wallbox",
      },
      {
        title: "Batteriespeicher",
        href: "/leistungen/stromspeicher",
      },
    ],
  },
  {
    title: "Projekte",
    href: "/projekte",
    children: [
      {
        title: "Grundschule Stuttgart",
        href: "/projekte/grundschule-stuttgart",
      },
      {
        title: "Busbahnhof München",
        href: "/projekte/busbahnhof-munchen",
      },
      {
        title: "Einfamilienhaus Konstanz",
        href: "/projekte/einfamilienhaus-konstanz",
      },
    ],
  },
  {
    title: "Über uns",
    href: "/ueber",
    children: [
      {
        title: "Mitarbeiter",
        href: "/ueber/mitarbeiter",
      },
      {
        title: "Kontakt",
        href: "/ueber/kontakt",
      },
      {
        title: "Karriere",
        href: "/ueber/karriere",
      },
    ],
  },

  {
    title: "Rechtliches",
    href: "/rechtliches",
    children: [
      {
        title: "AGB",
        href: "/rechtliches/agb",
      },
      {
        title: "Datenschutz",
        href: "/rechtliches/datenschutz",
      },
      {
        title: "Impressum",
        href: "/rechtliches/impressum",
      },
    ],
  },
];

const Footer = () => (
  <footer className=" bg-black px-4 pt-20 text-white md:px-16">
    <>
      <div className="flex flex-col justify-between md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col justify-start">
          <Link href={"/"}>
            <Image src={ImgLogo} alt="Logo" className="h-24 w-24" />
          </Link>

          <div className="flex space-x-8 pt-4" id="socials">
            <Link
              href="https://instagram.com/lanasdev"
              className=" transition-all hover:rotate-12"
              aria-label="Volker Voltaik Instagram Account"
            >
              <InstagramLogo size={32} />
            </Link>
            <Link
              href="https://twitter.com/lanasdev"
              className=" transition-all hover:rotate-12"
              aria-label="Volker Voltaik Twitter Account"
            >
              <TwitterLogo size={32} className="hover:fill-blue-400" />
            </Link>
            <Link
              href="https://youtube.com/"
              className=" transition-all hover:rotate-12"
              aria-label="Volker Voltaik Youtube Kanal"
            >
              <YoutubeLogo size={32} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-16 sm:grid-cols-4 md:pt-0 ">
          {FooterData.map((item, index) => (
            <div
              className="flex flex-col justify-start space-y-2 px-2 pt-10"
              key={index}
            >
              <Link
                href={item.href}
                className="pb-4 font-bold decoration-white hover:underline"
              >
                {item.title}
              </Link>
              {item.children.map((child, index) => (
                <Link
                  href={child.href}
                  key={index}
                  className="text-sm decoration-white hover:underline"
                >
                  {child.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 w-full border-b-2 border-white"></div>
      <span className="flex flex-col items-center justify-center gap-2 py-2 text-sm md:flex-row md:gap-0 ">
        <span>
          &copy; {new Date().getFullYear() || 2022} Volker Voltaik GmbH{" - "}
        </span>
        <a
          className="hover:underline hover:decoration-yellow md:pl-1 "
          target="_blank"
          rel="noopener noreferrer"
          href={"https://lanas.dev"}
        >
          {"Design & Entwicklung von Lanas.dev"}
        </a>
      </span>
    </>
  </footer>
);

export default Footer;
