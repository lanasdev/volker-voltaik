import Link from "next/link";
import { Image } from "react-datocms";
import { GetStaticProps, GetStaticPaths } from "next";
import SectionContainer from "components/SectionContainer";

import Layout from "components/Layout";

import { getProjects } from "lib/api";
import Team from "components/Team";
import Contact from "components/Contact";

const ProjectOverview = ({ projects }) => {
  return (
    <Layout title="Projekte">
      <SectionContainer className="pt-16">
        <Link
          className="pb-4 font-medium uppercase text-yellow hover:text-darkYellow hover:underline"
          href={"/#projekt"}
        >
          Projekt
        </Link>
        <h1 className="pb-16 text-3xl md:text-4xl">
          {/* {status == "connected" ? project.title + " (Entwurf)" : project.title}{" "} */}
          Projekte
        </h1>
      </SectionContainer>
      <Image
        data={projects[0].image.responsiveImage}
        className="h-80 w-screen md:h-96"
        layout="responsive"
        objectFit="cover"
        pictureClassName="h-80 w-screen object-cover object-center "
      />
      <SectionContainer className="py-24">
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <Link
              href={`/projekte/${project.slug}`}
              key={project.slug}
              className="flex flex-col"
            >
              <Image
                data={project.image.responsiveImage}
                className="h-64 w-full rounded object-cover"
              />
              <h2 className="pt-4 text-lg font-semibold">{project.title}</h2>
              <p className="pt-2 text-sm line-clamp-2">{project.description}</p>
            </Link>
          ))}
        </div>
      </SectionContainer>
      <Team />
      <Contact />
    </Layout>
  );
};

export default ProjectOverview;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getProjects();

  const projects = data.allProjects;

  return {
    props: {
      projects,
      revalidate: 60,
    },
  };
};
