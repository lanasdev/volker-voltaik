import Link from "next/link";
import Image from "next/image";

import { Image as DatoImg } from "react-datocms";

import Layout from "components/Layout";

import team from "img/team.jpg";
import SectionContainer from "components/SectionContainer";

import { getAbout } from "lib/api";
import { GetStaticProps } from "next";
import Contact from "components/Contact";

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getAbout();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

const Ueber = ({ data }) => {
  return (
    <Layout title="Über uns">
      <SectionContainer className="pt-16">
        <Link
          className="pb-4 font-medium uppercase text-yellow hover:text-darkYellow hover:underline"
          href={"/"}
        >
          Unser Team
        </Link>
        <h1 className="pb-16 text-3xl md:text-4xl">Über uns</h1>
      </SectionContainer>
      <Image
        src={team}
        alt={"Picture of our team"}
        className="h-80 w-screen flex-1 object-cover md:h-96"
      />
      <SectionContainer className="min-h-[90vh]">
        <div className="pt-8 md:pt-16">
          <p className="max-w-xl">
            Wir sind ein junges Team aus Ingenieuren und Elektrikern, die sich
            auf die Planung und Installation von Photovoltaikanlagen
            spezialisiert hat.
          </p>
        </div>

        <div className="col-span-1 grid place-items-stretch gap-8 pt-8 sm:grid-cols-2 md:grid-cols-3 md:pt-16">
          {data.allTeammembers.map((member) => (
            <Member key={member.id} m={member} />
          ))}
        </div>
      </SectionContainer>
      <div className="py-24"></div>
      <Contact />
    </Layout>
  );
};

export default Ueber;

const Member = ({ m }) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <DatoImg
        data={m.image.responsiveImage}
        // className="h-[384px] w-[256px] object-cover "
        className="object-cover "
      />
      <h4 className="pt-4 text-xl font-semibold">{m.name}</h4>
      <p className="pt-2 text-sm">{m.titel}</p>
    </div>
  );
};
