import Image from "next/image";
import Link from "next/link";
import LogoBig from "components/LogoBig";
import ManSolar from "public/img/ManSolar.png";
import CallToAction from "components/CallToAction";
//phosphoricons
import { Sun, Lightning, BatteryChargingVertical } from "phosphor-react";

const Leistungen = [
  {
    name: "Photovoltaik",
    url: <Sun />,
    slug: "photovoltaik",
    id: 0,
  },
  {
    name: "Elektrische Anlagen",
    icon: <Lightning />,
    slug: "elektrische-anlagen",
    id: 1,
  },
  {
    name: "Energiespeicher",
    icon: <BatteryChargingVertical />,
    slug: "energiespeicher",
    id: 2,
  },
];
const HeroSection = () => (
  <>
    <LogoBig />
    <section className="flex flex-col items-center justify-between pt-8 md:flex-row">
      <div className="flex flex-col items-start justify-between">
        <h1 className="font-display text-2xl font-semibold md:text-4xl ">
          Volker Voltaik - Elektroinstallateur
        </h1>
        <p className="font-regular max-w-xl pt-6 pb-10 leading-7">
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
          <div className="flex w-auto flex-row">
            {Leistungen.map((leistung) => (
              <Link href={`/leistungen/${leistung.slug}`} key={leistung.id}>
                <a className="flex flex-col items-center justify-start p-4">
                  <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
                    {leistung.icon}
                  </span>
                  <p className="text-md font-semibold">
                    {leistung.name + " -->"}
                  </p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image src={ManSolar} alt="Man holding Volker Voltaik Solar Panel" />
    </section>
  </>
);

export default HeroSection;
