import Link from "next/link";
import Image from "next/future/image";
import { GetStaticProps, GetStaticPaths } from "next";

import Layout from "components/Layout";

import { projekteDaten } from "data/data";

const Project = ({ project }) => {
    return (
        <Layout>
            <section className="min-h-[90vh] flex flex-col">
                <Image src={project.image} alt={project.title} height={500} width={500} className="w-screen object-cover flex-1 max-h-50screen" />
                <main className="px-8 flex-1">
                    <h1 className="text-2xl md:text-4xl font-semibold pb-2 pt-4">{"Projekt: " + project.name}</h1>
                    <p className="text-lg pb-2">{project.description}</p>
                </main>
            </section>
        </Layout>
    );
}

export default Project;

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params;

    const project = projekteDaten.find((project) => project.slug === slug);

    return {
        props: {
            project,
        },
    };
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = projekteDaten.map((project) => ({
        params: { slug: project.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

