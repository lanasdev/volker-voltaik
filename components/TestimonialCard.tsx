import cn from "classnames";

type TestimonialCardProps = {
  id: number;
  name: String;
  text: String;
};
const TestimonialCard = ({ id, name, text }: TestimonialCardProps) => {
  return (
    <div
      key={id}
      className={cn(
        "flex flex-col items-start justify-center",
        {
          // "border-r-4 border-yellow pr-4 ": id % 2 == 0,
          // "border-l-4 border-yellow pl-4 ": !(id % 2 == 0),
        },
        "border-l-4 border-yellow pl-4"
      )}
    >
      <p className="max-w-lg ">{text}</p>
      <p className="pt-4">{name}</p>
    </div>
  );
};

export default TestimonialCard;
