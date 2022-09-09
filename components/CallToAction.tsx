import Link from "next/link";
import { Phone } from "phosphor-react";

export const CallToActionNav = () => {
  return (
    <Link href="/kontakt" >
      <div className=" cursor-pointer">
        <a className="hidden w-[11em] items-center  justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow md:flex">
          Angebot anfragen
        </a>
        <a className="flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow md:hidden">
          <Phone size={32} />
        </a>
      </div>
    </Link>
  );
};

const CallToAction = () => {
  return (
    <Link href="/kontakt">
      <a className="flex w-[11em]  items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow">
        Angebot anfragen
      </a>
    </Link>
  );
};

export default CallToAction;
