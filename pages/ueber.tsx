import Link from "next/link";
import Image from "next/image";

import Layout from "components/Layout";

import team from "img/team.jpg";
import SectionContainer from "components/SectionContainer";

const Ueber = () => {
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
        height={1024}
        width={1024}
        className="max-h-50screen w-screen flex-1 object-cover"
      />
      <section className="container mx-auto min-h-[90vh]">
        <div className="px-8 pt-8 md:pt-16">
          <h1 className="pb-2 pt-4 text-2xl font-semibold md:pt-16 md:text-4xl">
            Über uns
          </h1>
          <p className="max-w-xl">
            Wir sind ein junges Team aus Ingenieuren, die sich auf die Planung
            und Installation von Photovoltaikanlagen spezialisiert hat.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Ueber;
