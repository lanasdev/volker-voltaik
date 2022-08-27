import Link from "next/link";

const CallToAction = () => (
  <Link href="/kontakt">
    <a className="flex w-[11em] items-center justify-center rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-yellow">
      Angebot anfragen
    </a>
  </Link>
);

export default CallToAction;
