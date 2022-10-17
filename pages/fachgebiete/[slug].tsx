import Image from "next/future/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import Layout from "components/Layout";

import { LeistungenDaten } from "data/data";
import SectionContainer from "components/SectionContainer";

const Fachgebiet = ({ fachgebiet }) => {
  return (
    <Layout>
      <Image
        src={fachgebiet.image}
        alt={fachgebiet.name}
        width={1000}
        height={500}
        className="h-[50vh] w-screen object-cover"
      />
      <SectionContainer className="pt-8 pb-16">
        <h1 className="pb-16 text-2xl md:text-4xl">{fachgebiet.name}</h1>
        <div className="prose">
          <p>{fachgebiet.content}</p>
        </div>
      </SectionContainer>
    </Layout>
  );
};

export default Fachgebiet;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LeistungenDaten.map((fachgebiet) => ({
      params: {
        slug: fachgebiet.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fachgebiet = LeistungenDaten.find(
    (fachgebiet) => fachgebiet.slug === params.slug
  );

  return {
    props: {
      fachgebiet,
    },
  };
};
