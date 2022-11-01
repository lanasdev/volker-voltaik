/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { ResponsiveImageType, StructuredText } from "react-datocms";
import { Image as DatoImg } from "react-datocms";

import Layout from "components/Layout";

import SectionContainer from "components/SectionContainer";
import { getAllLeistungen, getLeistung } from "lib/api";
import Contact from "components/Contact";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};
type RecordTextProps = {
  record: any;
};

const LeistungPage = ({ leistung }) => {
  return (
    <Layout>
      <SectionContainer className="pt-16">
        <Link
          className="pb-4 font-medium uppercase text-yellow hover:text-darkYellow hover:underline"
          href={"/#leistungen"}
        >
          Leistungen
        </Link>
        <h1 className="pb-16 text-3xl md:text-4xl">{leistung.titel}</h1>
      </SectionContainer>
      <Image
        src={leistung.bild.responsiveImage.src}
        sizes={leistung.bild.responsiveImage.srcSet}
        width={leistung.bild.responsiveImage.width}
        height={leistung.bild.responsiveImage.height}
        alt={
          leistung.bild.alt ||
          leistung.bild.responsiveImage.alt ||
          leistung.titel
        }
        placeholder="blur"
        blurDataURL={leistung.bild.responsiveImage.base64}
        priority
        className="h-80 w-screen object-cover md:h-96"
      />

      <main className="bg-[#252525]">
        <SectionContainer className="pt-8 pb-16 text-white ">
          <p className="float-right line-clamp-1">
            {leistung.bild.alt || leistung.bild.responsiveImage.alt}
          </p>

          <article className="prose prose-invert pt-16  prose-a:decoration-yellow prose-a:underline-offset-2 ">
            <StructuredText
              data={leistung.text}
              renderInlineRecord={({ record }) => {
                switch (record.__typename) {
                  case "link":
                    return (
                      <Link
                        href={record.url}
                        className="inline-block underline dark:decoration-yellow dark:hover:decoration-darkYellow"
                      >
                        {(record as any).children.value}
                      </Link>
                    );
                  default:
                    return null;
                }
              }}
              renderBlock={({ record }) => {
                switch (record.__typename) {
                  case "BildRecord":
                    return (
                      <DatoImg
                        data={(record.bild as RecordImageType).responsiveImage}
                        className="my-8"
                      />
                    );
                  default:
                    return null;
                }
              }}
            />
          </article>
        </SectionContainer>
        <Contact isHome={false} />
      </main>
    </Layout>
  );
};

export default LeistungPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllLeistungen();

  const paths = data.allLeistungs.map((leistung: { slug: string }) => ({
    params: { slug: leistung.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const leistung = await getLeistung(params.slug);

  return {
    props: {
      leistung: leistung.leistung,
    },
  };
};
