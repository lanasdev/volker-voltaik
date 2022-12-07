/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import { Image } from "react-datocms";

type LeistungenCardProps = {
  leistung: any;
};

const LeistungenCard = ({ leistung }: LeistungenCardProps) => {
  return (
    <Link
      href={`/leistungen/${leistung.slug}`}
      className="group flex cursor-pointer flex-col items-start rounded  bg-darkwhite group-hover:scale-105"
    >
      <Image
        data={leistung.bild.responsiveImage}
        className="h-28 w-full rounded-t object-cover"
        objectFit="cover"
      />
      <div className="p-6 ">
        <h4 className="pb-4 text-xl group-hover:underline">{leistung.titel}</h4>
        <p className="line-clamp-6">{leistung.beschreibung}</p>
      </div>
    </Link>
  );
};

export default LeistungenCard;
