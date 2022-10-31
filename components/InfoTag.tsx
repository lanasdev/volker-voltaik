import Link from "next/link";

const InfoTag = ({ text, href }: { text: string; href?: string }) => {
  return (
    <span className="flex items-center justify-center space-x-2 rounded bg-white py-[2px] px-4 font-semibold">
      {text}
    </span>
  );
};

export default InfoTag;
