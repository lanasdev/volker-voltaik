import Link from "next/link";

import Logo from "components/Logo";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";
import SectionContainer from "./SectionContainer";

const FooterData = [
  // {
  //     title: "Home",
  //     href: "/",
  //     children: []
  // },
  {
    title: "Fachgebiete",
    href: "/fachgebiete",
    children: [
      {
        title: "Photovoltaik",
        href: "/fachgebiete/photovoltaik",
      },
      {
        title: "E-Auto",
        href: "/fachgebiete/e-auto",
      },
      {
        title: "Energieeffizienz",
        href: "/fachgebiete/energieeffizienz",
      },
      {
        title: "Batteriespeicher",
        href: "/fachgebiete/batteriespeicher",
      },
    ],
  },
  {
    title: "Projekte",
    href: "/projekte",
    children: [
      {
        title: "Familie Dagobert",
        href: "/projekte/familie-dagobert",
      },
      {
        title: "Familie Müller",
        href: "/projekte/familie-mueller",
      },
      {
        title: "Familie Meier",
        href: "/projekte/familie-meier",
      },
    ],
  },
  {
    title: "Über uns",
    href: "/ueber-uns",
    children: [
      {
        title: "Mitarbeiter",
        href: "/ueber-uns/mitarbeiter",
      },
      {
        title: "Kontakt",
        href: "/ueber-uns/kontakt",
      },
      {
        title: "Karriere",
        href: "/ueber-uns/karriere",
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
  <section className=" bg-black/95 pt-20 pb-16 text-white md:px-16 md:pt-32">
    <SectionContainer>
      <div className="flex min-h-[25vh] flex-col items-center justify-between md:flex-row md:justify-around">
        <div className="flex flex-col justify-center">
          <Logo />
          <p className="max-w-xs pt-6 text-sm">
            „Die Gegenwart gehört ihnen, die Zukunft, für die ich gearbeitet
            habe, gehört mir.“ <br />- Nikola Tesla
          </p>
          <div className="flex space-x-8 pt-4" id="socials">
            <Link href="https://instagram.com/lanasdev">
              <a
                className=" transition-all hover:rotate-12"
                aria-label="Volker Voltaik Instagram Account"
              >
                <InstagramLogo size={32} />
              </a>
            </Link>
            <Link href="https://twitter.com/lanasdev">
              <a
                className=" transition-all hover:rotate-12"
                aria-label="Volker Voltaik Twitter Account"
              >
                <TwitterLogo size={32} className="hover:fill-blue-400" />
              </a>
            </Link>
            <Link href="https://youtube.com/">
              <a
                className=" transition-all hover:rotate-12"
                aria-label="Volker Voltaik Youtube Kanal"
              >
                <YoutubeLogo size={32} />
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-16 sm:grid-cols-4 md:pt-0 ">
          {FooterData.map((item, index) => (
            <div
              className="flex flex-col justify-start space-y-2 px-2 pt-10"
              key={index}
            >
              <Link href={item.href}>
                <a className="pb-4 font-bold decoration-white hover:underline">
                  {item.title}
                </a>
              </Link>
              {item.children.map((child, index) => (
                <Link href={child.href} key={index}>
                  <a className="text-sm decoration-white hover:underline">
                    {child.title}
                  </a>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 w-full border-b-2 border-white"></div>
      <span className=" float-right pt-2">
        &copy; {new Date().getFullYear() || 2022} Volker Voltaik
      </span>
    </SectionContainer>
  </section>
);

export default Footer;
