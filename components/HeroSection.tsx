import Image from "next/future/image";
import Link from "next/link";
import LogoBig from "components/LogoBig";
// import ManSolar from "public/img/ManSolar.png";
import SolarHome from "public/img/pexels-solar.jpg";
import CallToAction from "components/CallToAction";
//phosphoricons
import { Sun, Lightning, BatteryChargingVertical } from "phosphor-react";
import SectionContainer from "./SectionContainer";

const Leistungen = () => {
  const iconSize = 32;

  const LeistungenData = [
    {
      name: "Photovoltaik",
      url: <Sun size={iconSize} />,
      slug: "photovoltaik",
      id: 0,
    },
    {
      name: "Energiespeicher",
      icon: <BatteryChargingVertical size={iconSize} />,
      slug: "energiespeicher",
      id: 1,
    },
    {
      name: "Elektrik",
      icon: <Lightning size={iconSize} />,
      slug: "elektrische-anlagen",
      id: 2,
    },

  ];
  return (
    <div className="" >
      <h2 className="pt-16 pb-8 text-xl md:text-2xl font-semibold">
        Unsere Fachgebiete
      </h2>
      <div className="grid gap-x-6 grid-cols-2 md:grid-cols-3 flex-wrap " id="LeistungenIcons">
        <Link
          href={`/fachgebiete/${LeistungenData[0].slug}`}
          key={LeistungenData[0].id}
        >
          <a className="flex flex-col items-center py-4">
            <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
              {/* {Leistungen[0].icon} */}
              <Sun size={iconSize} />
            </span>
            <p className="text-md font-semibold">
              {LeistungenData[0].name}{" "}
              {/* <span className="hidden md:inline-block">{" -->"}</span> */}
            </p>
          </a>
        </Link>
        <Link
          href={`/fachgebiete/${LeistungenData[1].slug}`}
          key={LeistungenData[1].id}
        >
          <a className="flex flex-col items-center py-4">
            <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
              {LeistungenData[1].icon}
            </span>
            <p className="text-md font-semibold">
              {LeistungenData[1].name}{" "}
              {/* <span className="hidden md:inline-block">{" -->"}</span> */}
            </p>
          </a>
        </Link>
        <Link
          href={`/fachgebiete/${LeistungenData[2].slug}`}
          key={LeistungenData[2].id}
        >
          <a className="flex flex-col items-center py-4">
            <span className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white hover:bg-yellow">
              {LeistungenData[2].icon}
            </span>
            <p className="text-md font-semibold">
              {LeistungenData[2].name}{" "}
              {/* <span className="hidden md:inline-block">{" -->"}</span> */}
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row md:min-h-screen w-screen pb-24 ">
      {/* flex flex-col items-center justify-between px-16 pt-8 md:flex-row md:px-0  */}
      <div className="relative w-screen flex-1">
        <Image
          src={SolarHome}
          alt="Man holding Volker Voltaik Solar Panel"
          sizes="100vw"
          // fill
          priority={true}
          placeholder={"blur"}
          className="md:rounded-r-md object-cover object-center md:absolute md:inset-0 h-full w-full"
        />
      </div>
      {/* Hero Text Area */}
      <div className="flex flex-col flex-1 items-start justify-center px-8 md:px-16 pt-16 md:pt-0">
        {/* <mark className="bg-yellow	">Solarinstallationen</mark> */}
        <h1 className="font-display text-2xl font-semibold md:text-4xl">
          Volker Voltaik <br className="block md:hidden" /> -
          Elektroinstallateur
        </h1>
        <p className="font-regular pt-6 pb-10 leading-7 md:max-w-xl ">
          Es gibt viele Gründe in eine Solaranlage von Volker Voltaik zu
          investieren. Steigende Gaspreise, mögliche Blackouts oder einfach
          günstigere Strompreise. Alle Gründe sind legitim und deshalb wir
          passen immer Ihre Anlage, Ihren wünschen an.
        </p>
        <CallToAction />
        <Leistungen />
      </div>
    </section>
  );
}

export default HeroSection;
