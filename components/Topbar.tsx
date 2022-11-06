import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Topbar = () => {
  return (
    <div className="bg-yellow text-black">
      <SectionContainer className="flex max-w-7xl flex-row items-center justify-between space-x-8 overflow-x-auto px-2 sm:px-6 lg:px-8">
        <span className="flex-none flex-shrink-0 py-2 sm:pl-2">
          Stäffele 17, 70111 Stuttgart
        </span>
        <span className="flex-none flex-shrink-0 py-2 ">
          <a href="tel:+49 0711 123456">+49 0711 123456</a>
        </span>
        <span className="flex-none flex-shrink-0 py-2 ">
          <a href="mailto:matthias@lanas.dev">matthias@lanas.dev</a>
        </span>
      </SectionContainer>
    </div>
  );
};

export default Topbar;
