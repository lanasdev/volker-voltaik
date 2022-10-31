import Link from "next/link";

export default function ContactButton(href: string, text: string) {
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
