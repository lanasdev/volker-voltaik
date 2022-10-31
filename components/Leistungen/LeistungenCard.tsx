/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Image } from "react-datocms";

type LeistungenCardProps = {
  leistung: any;
};

const LeistungenCard = ({ leistung }: LeistungenCardProps) => {
  return (
    <a
      href={`/leistungen/${leistung.slug}`}
      className="group flex flex-col items-start justify-center rounded bg-darkwhite"
    >
      <Image
        data={leistung.bild.responsiveImage}
        width={350}
        height={100}
        className="h-28 w-full rounded-t object-cover group-hover:scale-[103]"
      />
      <div className="p-6 group-hover:underline">
        <h4 className="pb-4 text-xl group-hover:underline">{leistung.titel}</h4>
        <p>{leistung.beschreibung}</p>
      </div>
    </a>
  );
};

export default LeistungenCard;
