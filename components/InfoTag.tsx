import Link from "next/link";
import cn from "classnames";

const InfoTag = ({
  text,
  href,
  isDark = false,
}: {
  text: string;
  href?: string;
  isDark?: boolean;
}) => {
  return (
    <span
      className={cn(
        isDark ? "bg-black text-white" : "bg-white text-black",
        "flex items-center justify-center space-x-2 rounded py-[2px]  px-4 text-center font-semibold"
      )}
    >
      {text}
    </span>
  );
};

export default InfoTag;
