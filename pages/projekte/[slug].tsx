/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import {
  ResponsiveImageType,
  StructuredText,
  useQuerySubscription,
} from "react-datocms";
import { Image as DatoImg } from "react-datocms";

import Layout from "components/Layout";

import SectionContainer from "components/SectionContainer";
import { getAllProjects, getProject } from "lib/api";
import Contact from "components/Contact";

type RecordImageType = {
  responsiveImage: ResponsiveImageType;
};
type RecordTextProps = {
  record: any;
};

const ProjectPage = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription);
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };

  const project = data.project;
  return (
    <Layout title={project.title}>
      {/* DatoCMS Live updates */}
      {status != "closed" && (
        <div className="pb-8">
          <p>Connection status: {statusMessage[status]}</p>
          {error && (
            <div>
              <h1>Error: {error.code}</h1>
              <div>{error.message}</div>
              {error.response && (
                <pre>{JSON.stringify(error.response, null, 2)}</pre>
              )}
            </div>
          )}
        </div>
      )}
      <SectionContainer className="pt-16">
        <Link
          className="pb-4 font-medium uppercase text-yellow hover:text-darkYellow hover:underline"
          href={"/#projekt"}
        >
          Projekt
        </Link>
        <h1 className="pb-16 text-3xl md:text-4xl">
          {status == "connected" ? project.title + " (Entwurf)" : project.title}{" "}
        </h1>
      </SectionContainer>
      <Image
        src={project.image.responsiveImage.src}
        sizes={project.image.responsiveImage.srcSet}
        width={project.image.responsiveImage.width}
        height={project.image.responsiveImage.height}
        alt={
          project.image.alt ||
          project.image.responsiveImage.alt ||
          project.titel
        }
        placeholder="blur"
        blurDataURL={project.image.responsiveImage.base64}
        priority
        className="h-80 w-screen object-cover object-center md:h-96"
      />
      <main className="bg-[#252525]">
        <SectionContainer className="pt-8 pb-16 text-white ">
          <p className="float-right line-clamp-1">
            {project.image.alt || project.image.responsiveImage.alt}
          </p>

          <article className="prose prose-invert pt-16  prose-a:decoration-yellow prose-a:underline-offset-2 ">
            <StructuredText
              data={project.text}
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
                  case "ImageRecord":
                    return (
                      <DatoImg
                        data={(record.image as RecordImageType).responsiveImage}
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
        <Contact />
      </main>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllProjects();

  const paths = data.allProjects.map((project: { slug: String }) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, preview }) => {
  const project = await getProject(params.slug, preview);

  return {
    props: project,
    revalidate: 60,
  };
};
