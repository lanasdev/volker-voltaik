import Link from "next/link";
import {
  Image,
  ResponsiveImageType,
  StructuredText,
  useQuerySubscription,
} from "react-datocms";
import { GetStaticProps, GetStaticPaths } from "next";
import SectionContainer from "components/SectionContainer";

import Layout from "components/Layout";

import { getKarriere } from "lib/api";
import Team from "components/Team";
import Contact from "components/Contact";
import JobItem from "components/Karriere/JobItem";

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const data = await getKarriere(preview);

  return {
    props: data,
    revalidate: 60,
  };
};

const ProjectOverview = ({ subscription }) => {
  const { data, error, status } = useQuerySubscription(subscription);
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };
  const { karriere, allJobs } = data;
  return (
    <Layout title="Projekte">
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
          Karriere
        </Link>
        <h1 className="pb-16 text-3xl md:text-4xl">
          {status == "connected" ? "Karriere " + " (Entwurf)" : "Karriere "}{" "}
        </h1>
      </SectionContainer>
      <Image
        data={karriere.image.responsiveImage}
        className="h-80 w-screen md:h-96"
        layout="responsive"
        objectFit="cover"
        pictureClassName="h-80 w-screen object-cover object-center "
      />
      <SectionContainer className="py-24">
        <h2 className="pb-8 text-xl">{karriere.title}</h2>
        <div className="prose">
          <StructuredText data={karriere.content} />
          {/* Describe how awesome the electrician is */}
        </div>

        <div className="pt-24">
          <p className="pb-4 font-semibold">
            Wir freuen uns auf deine Bewerbung!
          </p>
          {allJobs.map((job) => (
            <JobItem key={job.slug} job={job} />
          ))}
        </div>
        {/* <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre> */}
      </SectionContainer>
      <Team />
      <Contact />
    </Layout>
  );
};

export default ProjectOverview;
