import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// import HeroSection from "components/HeroSection";

// import Testimonials from "components/Testimonials";
import Contact from "components/Contact";
// import Projects from "components/Projects";
import { GetStaticProps } from "next";

import { projekteDaten } from "data/data";
import SectionContainer from "components/SectionContainer";
import ContactButton from "components/ContactButton";
import InfoTag from "components/InfoTag";

import heroImage from "img/pexels-erik-karits-10268580.jpg";
import teamvolker from "img/team-volker-voltaik.png";
import LeistungenCard from "components/Leistungen/LeistungenCard";
import TestimonialCard from "components/TestimonialCard";
import { getHome } from "lib/api";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHome();

  return {
    props: {
      data,
    },
  };
};

const IndexPage = ({ data }) => {
  return (
    <Layout title="Volker Voltaik">
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <main>
        <Hero />
        {/* <div className="relative px-0 pb-32"> */}
        <div className=" relative left-0 right-0 -z-10 -mt-48 bg-[#252525] md:-mt-72 ">
          <Leistungen leistungen={data.allLeistungs} />
          <Facts />
        </div>
        {/* </div> */}
        <Testimonials />
        <Team />
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;

const Hero = () => {
  return (
    <SectionContainer className="pt-8">
      <div className="flex flex-col items-start justify-center gap-8">
        <h1 className="max-w-sm text-3xl leading-9">
          Wir helfen Ihnen Ihre Stromkosten zu minimieren
        </h1>
        <ContactButton href="#kontakt" />
      </div>
      <div className="relative w-full">
        <h2 className=" absolute -top-8 right-0 ml-60 max-w-xs border-l-2 border-black pl-4 text-xl font-light text-black decoration-black">
          Installation von Photovoltaikanlagen, Stromspeicher und Umwelzpumpen
        </h2>
        <Image
          src={heroImage}
          alt="Volker Voltaik"
          className=" object-cover pt-16 "
        />
      </div>
      <div className="flex justify-between px-4 pt-8 ">
        <h4 className="font-semibold text-white">Projekt 1</h4>
        <div className="flex gap-4">
          <InfoTag text="Stuttgart" />
          <InfoTag text="34 kW" />
        </div>
      </div>
    </SectionContainer>
  );
};

const Leistungen = (leistungen) => {
  return (
    <SectionContainer className="pt-48 md:pt-80">
      <div className="pt-28">
        <h3 className=" text-2xl font-semibold text-white">Leistungen</h3>
        <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 xl:grid-cols-3 ">
          {leistungen.leistungen.map((leistung) => (
            <LeistungenCard key={leistung.slug} leistung={leistung} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

const Facts = () => {
  return (
    <div className="px-4 pb-20">
      <SectionContainer className="mt-64 h-full rounded bg-[#EFEFEF] px-0">
        <div className="flex h-full items-center justify-center gap-4 py-4">
          <span className="h-4 w-4 animate-pulse rounded-full bg-yellow"></span>
          <p className="">Am Strom der Zeit</p>
        </div>
        <hr />
        <div className="inset-0 flex flex-col items-center justify-center gap-8 pt-8">
          <p className="max-w-xs px-8">
            Volker Voltaik besteht seit 1999 und wurde als Familienbetrieb
            gegründet. Seit dem konnten wir als Unternehmen einiges erreichen
            und unsere Kunden bei einer Vielzahl an Projekten unterstützen.
          </p>

          <div className="grid grid-cols-1 gap-8 pb-16">
            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">7777</h4>
              <p className="text-sm">GWh in Solarenergie</p>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">20</h4>
              <p className="text-sm">Jahre Erfahrung</p>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">7</h4>
              <p className="text-sm">Jahre Armotisierungszeit</p>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">300</h4>
              <p className="text-sm">zufriedene Kunden</p>
            </div>
          </div>
          <div className="h-10 w-full rounded-b bg-yellow"></div>
        </div>
      </SectionContainer>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Reiner Reinhold",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
    {
      id: 2,
      name: "Max Mustermann",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
    {
      id: 3,
      name: "Max Mustermann",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
  ];

  return (
    <SectionContainer className="relative pt-12">
      <div className="grid grid-cols-1 gap-8 ">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            id={testimonial.id}
            key={testimonial.id}
            name={testimonial.name}
            text={testimonial.text}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

const Team = () => {
  return (
    <div className="z-0 px-4 pb-16 pt-16">
      <SectionContainer className="rounded bg-[#EFEFEF] px-0">
        <div className="flex items-center justify-center py-4">Unser Team</div>
        <hr />
        <div className="flex flex-col items-center justify-center pt-8 pb-10">
          <Image src={teamvolker} alt="Team Volker Voltaik" className="px-4" />
          <p className="max-w-xs px-8 pt-8">
            Unser Team besteht aus 14 Mitarbeitern, von Azubis über
            Bürofachkräfte bis hin zu Elektromeister. Wir harmonieren gut und
            haben immer Spass auf der Arbeit.
          </p>
        </div>
        <div className="h-10 w-full rounded-b bg-yellow"></div>
      </SectionContainer>
    </div>
  );
};
