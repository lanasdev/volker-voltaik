import cn from "classnames";

type TestimonialCardProps = {
  testimonial: any;
};

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  let newDate = `${day}/${month}/${year}`;
  return newDate;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-center",
        {
          // "border-r-4 border-yellow pr-4 ": id % 2 == 0,
          // "border-l-4 border-yellow pl-4 ": !(id % 2 == 0),
        },
        "border-l-4 border-yellow pl-4"
      )}
    >
      <p className="max-w-lg ">{testimonial.text}</p>
      <p className="pt-4">{testimonial.name}</p>
      <span className="text-black/50">
        {testimonial.unternehmen || testimonial.stadt
          ? (testimonial.unternehmen || testimonial.stadt) +
            ", " +
            formatDate(testimonial.datum)
          : formatDate(testimonial.datum)}
      </span>
    </div>
  );
};
export default TestimonialCard;
