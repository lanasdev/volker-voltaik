import Image from "next/image";
import { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "components/Layout";

import { LeistungenDaten } from "data/data";
import SectionContainer from "components/SectionContainer";

const Fachgebiete = ({ fachgebiete }) => {
  return (
    <Layout>
      <SectionContainer className="py-24 ">
        <h1 className="pb-16 text-2xl md:text-4xl">Leistungen</h1>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-16">
          {fachgebiete.map((fachgebiet) => (
            <li key={fachgebiet.slug}>
              <Link href={`/fachgebiete/${fachgebiet.slug}`}>
                <a>
                  <Image
                    src={fachgebiet.image}
                    alt={fachgebiet.title}
                    height={600}
                    width={1920}
                    className="h-64 w-full object-cover"
                  />
                  <h2 className="pt-4 text-lg font-semibold">
                    {fachgebiet.name}
                  </h2>
                  <p className="pt-2 text-sm">{fachgebiet.description}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </Layout>
  );
};

export default Fachgebiete;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      fachgebiete: LeistungenDaten,
    },
  };
};
