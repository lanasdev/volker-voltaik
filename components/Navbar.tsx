import Link from "next/link";
import Logo from "../components/Logo";
import CallToAction from "./CallToAction";

const Navbar = () => {
  return (
    <nav className="flex  items-center py-2 sm:justify-center md:justify-between">
      <Link href="/">
        <a className="text-2xl font-bold">
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
            <a className="rounded-lg px-[20px] py-[10px] font-medium text-black underline-offset-2 hover:bg-black/10 hover:underline hover:decoration-yellow">
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
