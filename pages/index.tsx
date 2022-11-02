import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// import HeroSection from "components/HeroSection";

import { GetStaticProps } from "next";

import SectionContainer from "components/SectionContainer";
import ContactButton from "components/ContactButton";
import InfoTag from "components/InfoTag";

import heroImage from "img/pexels-erik-karits-10268580.jpg";
import teamvolker from "img/team-volker-voltaik.png";
import LeistungenList from "components/Leistungen/LeistungenList";
// import TestimonialList from "components/testimonial/TestimonialList";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Testimonials = dynamic(() => import("components/Testimonials"), {
  suspense: true,
});

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
      <Hero />
      {/* <div className="relative px-0 "> */}
      <div className=" left-0 right-0 -z-10 -mt-48 bg-[#252525] pb-32 md:-mt-72">
        <LeistungenList leistungen={data.allLeistungs} />
        <Facts />
      </div>
      {/* </div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials allTestimonials={data.allTestimonials} />
      </Suspense>
      <Team />
      {/* <Contact isHome={true} /> */}
      <Contact />
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

const Facts = () => {
  return (
    <div className="px-4 pb-20">
      <section className="container mx-auto mt-64 h-full rounded bg-[#EFEFEF]">
        <div className="flex h-full items-center justify-center gap-4 py-4">
          <span className="h-4 w-4 animate-pulse rounded-full bg-yellow"></span>
          <p className="">Am Strom der Zeit</p>
        </div>
        <hr />
        <div className="inset-0 flex flex-col items-center justify-center gap-8 pt-8 md:flex-row">
          <p className="max-w-xs px-8">
            Volker Voltaik besteht seit 1999 und wurde als Familienbetrieb
            gegründet. Seit dem konnten wir als Unternehmen einiges erreichen
            und unsere Kunden bei einer Vielzahl an Projekten unterstützen.
          </p>

          <div className="grid grid-cols-1 gap-8 divide-y-2 pb-16 first:border-r-2 first:border-b-2 sm:grid-cols-2 sm:divide-y-0">
            <div className="flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">7777</h4>
              <p className="text-sm">GWh in Solarenergie</p>
            </div>
            {/* <hr /> */}
            <div className=" flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">20</h4>
              <p className="text-sm">Jahre Erfahrung</p>
            </div>
            {/* <hr /> */}
            <div className=" flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">7</h4>
              <p className="text-sm">Jahre Armotisierungszeit</p>
            </div>
            {/* <hr /> */}
            <div className=" flex flex-col items-center justify-center pt-8">
              <h4 className="text-2xl ">300</h4>
              <p className="text-sm">zufriedene Kunden</p>
            </div>
          </div>
        </div>
        <div className="inset-x-0 h-10 w-full rounded-b bg-yellow" />
      </section>
    </div>
  );
};

const Team = () => {
  return (
    <div className="relative z-20 px-4 pb-16 pt-16">
      <section className="container mx-auto rounded bg-[#EFEFEF]">
        <div className="flex items-center justify-center py-4">Unser Team</div>
        <hr />
        <div className="flex flex-col items-center justify-center pt-8 pb-10 sm:flex-row">
          <Image src={teamvolker} alt="Team Volker Voltaik" className="px-4" />
          <p className="max-w-xs px-8 pt-8">
            Unser Team besteht aus 14 Mitarbeitern, von Azubis über
            Bürofachkräfte bis hin zu Elektromeister. Wir harmonieren gut und
            haben immer Spass auf der Arbeit.
          </p>
        </div>
        <div className="inset-x-0 h-10 w-full rounded-b bg-yellow"></div>
      </section>
    </div>
  );
};

import { Envelope, Phone } from "phosphor-react";
import Contactform from "components/Contactform";
import cn from "classnames";

const Contact = () => {
  return (
    <div className="-mt-32 bg-black text-white" id="kontakt">
      <SectionContainer className=" -z-10 py-16 pt-32">
        <h3 className="max-w-xs text-3xl font-semibold">
          Bringen Sie Licht in Ihr Haus - nachhaltig
        </h3>
        <div className="flex flex-col items-start justify-start gap-4 pt-14">
          <p>
            Bismarkstrasse 17 <br /> 70111 Stuttgart{" "}
          </p>
          <a
            href="mailto:hallo@volkervoltaik.de"
            className="flex flex-row items-center justify-center gap-4 "
          >
            <Envelope size={32} />
            <p>hallo@volkervoltaik.de</p>
          </a>
          <a
            href="tel:0987 3820029"
            className="flex flex-row items-center justify-center gap-4 "
          >
            <Phone size={32} />
            <p>0987 3820029</p>
          </a>
        </div>
        <hr className="my-16 border-yellow" />
        <Contactform />
      </SectionContainer>
    </div>
  );
};
