import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import Hero, { HeroSkeleton } from "components/Hero";
import Team from "components/Team";
import Layout from "components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
// import HeroSection from "components/HeroSection";

import { GetStaticProps } from "next";

import SectionContainer from "components/SectionContainer";
import Contact from "components/Contact";
import ContactButton from "components/ContactButton";
import InfoTag from "components/InfoTag";

import heroImage from "img/pexels-erik-karits-10268580.jpg";
import LeistungenList from "components/Leistungen/LeistungenList";
// import TestimonialList from "components/testimonial/TestimonialList";

const Testimonials = dynamic(
  () => import("components/testimonial/Testimonials"),
  {
    suspense: true,
  }
);

const DynamicHero = dynamic(() => import("components/Hero"), {
  suspense: true,
});

import { getHome } from "lib/api";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHome();

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
};

const IndexPage = ({ data }) => {
  return (
    <Layout title="Volker Voltaik">
      <Suspense fallback={<HeroSkeleton projects={data.allProjects} />}>
        <DynamicHero projects={data.allProjects} />
      </Suspense>
      {/* <Hero projects={data.allProjects} /> */}
      {/* <div className="relative px-0 "> */}
      <div className=" left-0 right-0 -z-10 -mt-48 bg-[#252525] pb-16 md:-mt-72">
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

const Facts = () => {
  return (
    <div className="px-4">
      <section className="container mx-auto mt-32 h-full max-w-4xl rounded bg-[#EFEFEF]">
        <div className="flex h-full items-center justify-center gap-4 py-4">
          <span className="h-4 w-4 animate-pulse rounded-full bg-yellow"></span>
          <p className="font-semibold">Am Strom der Zeit</p>
        </div>
        <hr />
        <div className="inset-0 flex flex-col items-start justify-center gap-8 pt-8 md:flex-row md:justify-evenly">
          <p className="max-w-xs px-8">
            Volker Voltaik besteht seit 1999 und wurde als Familienbetrieb
            gegründet. Seit dem konnten wir als Unternehmen einiges erreichen
            und unsere Kunden bei einer Vielzahl an Projekten unterstützen.
          </p>

          <div className="grid grid-cols-1 gap-8 divide-y-2 pb-16 first:border-r-2 first:border-b-2 sm:grid-cols-2 sm:divide-y-0">
            <div className="flex flex-col items-center justify-center ">
              <h4 className="text-2xl ">7777</h4>
              <p className="text-sm">GWh in Solarenergie</p>
            </div>
            {/* <hr /> */}
            <div className=" flex flex-col items-center justify-center ">
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
