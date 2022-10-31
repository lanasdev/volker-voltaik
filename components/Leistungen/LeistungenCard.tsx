import Link from "next/link";
import Image from "next/image";

type LeistungenCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
};

const LeistungenCard = ({
  title,
  description,
  imageSrc,
  slug,
}: LeistungenCardProps) => {
  return (
    <a
      href={`/leistungen/${slug}`}
      className="bg-darkwhite group flex flex-col items-start justify-center rounded"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={350}
        height={100}
        className="h-28 w-full rounded-t object-cover group-hover:scale-[103]"
      />
      <div className="p-6 group-hover:underline">
        <h4 className="pb-4 text-xl group-hover:underline">{title}</h4>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default LeistungenCard;
