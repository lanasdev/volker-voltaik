import Image from "next/image";
import teamvolker from "img/team-volker-voltaik.png";
import SectionContainer from "./SectionContainer";

const Team = () => {
  return (
    <div className="relative z-20 px-4 pb-16 pt-16">
      <section className="container mx-auto max-w-4xl rounded bg-[#EFEFEF]  ">
        <div className="flex items-center justify-center py-4 font-semibold">
          Unser Team
        </div>

        <hr />

        <div className="flex flex-col items-center justify-center pt-8 pb-10 sm:flex-row">
          <Image src={teamvolker} alt="Team Volker Voltaik" className="px-4" />

          <p className="max-w-xs p-8">
            Unser Team besteht aus 14 Mitarbeitern, von Azubis über
            Bürofachkräfte bis hin zu Elektromeister. Wir harmonieren gut und
            haben immer Spass auf der Arbeit.
          </p>
        </div>

        <div className="inset-x-0 h-10 w-full rounded-b bg-yellow"></div>
      </section>
    </div>
  );
};

export default Team;
