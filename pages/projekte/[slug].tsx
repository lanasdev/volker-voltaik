import Link from "next/link";
import Image from "next/future/image";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "components/Layout";

import { projekteDaten } from "data/data";
import Contact from "components/Contact";

const Project = ({ project }) => {
  for (const property in project.details) {
    // if (Object.prototype.hasOwnProperty.call(project, property)) {
    //     const element = project[property];

    // }
    console.log(property);
  }
  return (
    <Layout>
      <section className="flex min-h-[90vh] flex-col">
        <Image
          src={project.imageBig}
          alt={project.title}
          height={600}
          width={1920}
          className="max-h-50screen w-screen flex-1 object-cover"
        />
        <main className="container mx-auto flex-1 px-8">
          <h1 className="pb-2 pt-4 text-2xl font-semibold md:pt-16 md:text-4xl">
            {"Projekt: " + project.name}
          </h1>
          <p className="pb-2 text-lg ">{project.description}</p>
          <h2 className="pt-8 font-semibold">Daten und Fakten</h2>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <span className="">{"Fläche: " + project.details.size + "m2"}</span>
            <span className="">{"kWp: " + project.details.kwp}</span>
            <span className="">{"Ort: " + project.details.location}</span>
            <span className="">{"Baujahr: " + project.details.year}</span>
          </div>

          <p className="prose pt-8">{project.content}</p>
          <h2 className="pt-12 font-semibold md:pt-24">Weitere Bilder</h2>
          <div className="grid grid-cols-2 pt-4 md:grid-cols-4 md:pt-8 [&>*]:h-64 [&>*]:w-64">
            <Image
              src={project.imageBig}
              alt={project.title}
              height={600}
              width={1920}
              className=" object-cover"
            />
            <Image
              src={project.imageBig}
              alt={project.title}
              height={600}
              width={1920}
              className=" object-cover"
            />
            <Image
              src={project.imageBig}
              alt={project.title}
              height={600}
              width={1920}
              className=" object-cover"
            />
            <Image
              src={project.imageBig}
              alt={project.title}
              height={600}
              width={1920}
              className=" object-cover"
            />
          </div>

          {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
        </main>
      </section>
      <Contact />
    </Layout>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;

  const project = projekteDaten.find((project) => project.slug === slug);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projekteDaten.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
