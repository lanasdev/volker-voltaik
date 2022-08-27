import Link from "next/link";
import Logo from "../components/Logo";
import CallToAction from "./CallToAction";

const Navbar = () => {
  return (
    <nav className="flex  items-center md:justify-between py-2 sm:justify-center">
      <Link href="/">
        <a className="font-bold text-2xl">
          <Logo />
        </a>
      </Link>
      <div className="space-x-4">
      {[
        ["Home", "/"],
        ["Projekte", "/projekte"],
        ["Fachgebiete", "/fachgebiete"],
        ["Ueber uns", "/ueber"],
      ].map(([title, url]) => (
        <Link href={url} key={title}>
          <a className="rounded-lg px-[20px] py-[10px] font-medium text-black hover:bg-black/10 hover:underline underline-offset-2 hover:decoration-yellow">
            {title}
          </a>
        </Link>
      ))}
      </div>
      <CallToAction />

    </nav>
  );
};

export default Navbar;
