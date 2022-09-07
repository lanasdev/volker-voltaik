import Image from "next/image";
import Link from "next/link";
import LogoBig from "components/LogoBig";
import ManSolar from "public/img/ManSolar.png";
import CallToAction from "components/CallToAction";
//phosphoricons
import { Sun, Lightning, BatteryChargingVertical } from "phosphor-react";
import SectionContainer from "./SectionContainer";

const HeroSection = () => {
  const iconSize = 32;

  const Leistungen = [
    {
      name: "Photovoltaik",
      url: <Sun size={iconSize} />,
      slug: "photovoltaik",
      id: 0,
    },
    {
      name: "Elektrische Anlagen",
      icon: <Lightning size={iconSize} />,
      slug: "elektrische-anlagen",
      id: 1,
    },
    {
      name: "Energiespeicher",
      icon: <BatteryChargingVertical size={iconSize} />,
      slug: "energiespeicher",
      id: 2,
    },
  ];

  return (
    <SectionContainer>
      <section className="flex flex-col items-center justify-between px-16 pt-8 md:flex-row md:px-0 ">
        <div className="flex flex-col items-start justify-between">
          <h1 className="font-display text-2xl font-semibold md:text-4xl">
            Volker Voltaik <br className="block md:hidden" /> -
            Elektroinstallateur
          </h1>
          <p className="font-regular pt-6 pb-10 leading-7 md:max-w-xl">
            Es gibt viele Gründe in eine Solaranlage von Volker Voltaik zu
            investieren. Steigende Gaspreise, mögliche Blackouts oder einfach
            günstigere Strompreise. Alle Gründe sind legitim und deshalb wir
            passen immer Ihre Anlage, Ihren wünschen an.
          </p>
          <CallToAction />
          {/* Leistungen Section */}
          <div className="flex flex-col">
            <h2 className="pt-16 pb-8 text-2xl font-semibold">
              Unsere Leistungen
            </h2>
            <div className="flex flex-col md:flex-row" id="LeistungenIcons">
              <Link
                href={`/leistungen/${Leistungen[0].slug}`}
                key={Leistungen[0].id}
              >
                <a className="flex flex-col items-center justify-start p-4">
                  <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
                    {/* {Leistungen[0].icon} */}
                    <Sun size={iconSize} />
                  </span>
                  <p className="text-md font-semibold">
                    {Leistungen[0].name}{" "}
                    <span className="hidden md:inline-block">{" -->"}</span>
                  </p>
                </a>
              </Link>
              <Link
                href={`/leistungen/${Leistungen[1].slug}`}
                key={Leistungen[1].id}
              >
                <a className="flex flex-col items-center justify-start p-4">
                  <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
                    {Leistungen[1].icon}
                  </span>
                  <p className="text-md font-semibold">
                    {Leistungen[1].name}{" "}
                    <span className="hidden md:inline-block">{" -->"}</span>
                  </p>
                </a>
              </Link>
              <Link
                href={`/leistungen/${Leistungen[2].slug}`}
                key={Leistungen[2].id}
              >
                <a className="flex flex-col items-center justify-start p-4">
                  <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
                    {Leistungen[2].icon}
                  </span>
                  <p className="text-md font-semibold">
                    {Leistungen[2].name}{" "}
                    <span className="hidden md:inline-block">{" -->"}</span>
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={ManSolar}
            alt="Man holding Volker Voltaik Solar Panel"
          // className="hidden md:block"
          />
        </div>
      </section>
      {/* <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-gray-800 z-0 skew-y-3 [transform-origin: top left] "></div> */}
    </SectionContainer>
  );
};

export default HeroSection;
