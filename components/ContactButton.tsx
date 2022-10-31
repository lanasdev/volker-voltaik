import Link from "next/link";

type Props = {
  text?: string;
  href: string;
};

export default function ContactButton({ href, text }: Props) {
  return (
    <div className="flex justify-center">
      <Link
        href={href || "/#kontakt"}
        className="rounded bg-yellow py-2 px-4 font-bold hover:bg-darkYellow"
      >
        {text || "Kontakt"}
      </Link>
    </div>
  );
}
