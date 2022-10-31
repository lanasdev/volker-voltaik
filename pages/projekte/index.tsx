import Link from "next/link";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import SectionContainer from "components/SectionContainer";

import Layout from "components/Layout";

import { projekteDaten } from "data/data";

const ProjectOverview = ({ projekte }) => {
  return (
    <Layout title="Projekte">
      <SectionContainer className="py-24">
        <h1 className="text-2xl pb-16 font-semibold md:text-4xl">Projekte</h1>
        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 md:gap-8">
          {projekte.map((project) => (
            <Link href={`/projekte/${project.slug}`} key={project.slug}>
              <a className="flex flex-col">
                <Image
                  src={project.imageBig}
                  alt={project.title}
                  height={600}
                  width={1920}
                  className="h-64 w-full object-cover"
                />
                <h2 className="pt-4 text-lg font-semibold">{project.name}</h2>
                <p className="pt-2 text-sm">{project.description}</p>
              </a>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </Layout>
  );
};


export default ProjectOverview;


export const getStaticProps: GetStaticProps = async (context) => {

    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    const projekte = projekteDaten;
  
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        projekte,
      },
    }
  }
