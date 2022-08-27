import Link from "next/link";

const CallToAction = () => (
    <Link href="/kontakt">
        <a className="flex items-center justify-center w-[11em] rounded-lg px-4 py-2 font-medium bg-black text-white hover:bg-yellow">
          Angebot anfragen
        </a>
      </Link>
)

export default CallToAction;