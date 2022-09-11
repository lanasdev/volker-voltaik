import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import SectionContainer from "./SectionContainer";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 0,
      name: "John Doe",
      company: "Company",
      text: "NULL. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: true,
    },
    {
      id: 1,
      name: "Jane Schmoe",
      company: "Company",
      text: "EINS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
    {
      id: 2,
      name: "John Doe",
      company: "Company",
      text: "Zwei. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
    {
      id: 3,
      name: "Jane Schmoe",
      company: "Company",
      text: "Drei. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
      active: false,
    },
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const rotateTestimonial = (PrevOrNext: "prev" | "next") => {
    if (PrevOrNext == "prev") {
      if (currentTestimonial === 0) {
        setCurrentTestimonial(testimonials.length - 1);
      } else {
        setCurrentTestimonial(currentTestimonial - 1);
      }
    } else if (PrevOrNext === "next") {
      if (currentTestimonial < testimonials.length - 1) {
        setCurrentTestimonial(currentTestimonial + 1);
      } else {
        setCurrentTestimonial(0);
      }
    }
  };

  return (
    <SectionContainer>
      <section className="h-full w-full pb-16">
        <h3 className="pb-32 text-xl font-semibold">Was unsere Kunden sagen</h3>
        <div className="mx-auto flex h-full flex-col items-center justify-between">
          {/* <span className="absolute top-5 font-display text-4xl">{`"`}</span> */}
          <div className="flex h-full w-1/2 flex-row items-center justify-around">
            <button
              className="rounded py-2 px-4 text-2xl font-bold text-black/50 hover:text-black md:text-4xl"
              onClick={() => {
                rotateTestimonial("prev");
              }}
            >
              {"<"}
            </button>
            {/* diplay testimonial only if the testimonial id equals currentTestimonial  */}
            {testimonials
              .filter((testimonial) => testimonial.id === currentTestimonial)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex min-h-[20vh]  flex-col items-center justify-center"
                >
                  <p className="text-md w-[50vw] md:w-full sm:max-w-3xl">{testimonial.text}</p>
                  <p className="pt-4">{"- " + testimonial.name}</p>
                </div>
              ))}
            <button
              className="rounded py-2 px-4 text-2xl font-bold text-black/50 hover:text-black md:text-4xl"
              onClick={() => {
                rotateTestimonial("next");
              }}
            >
              {">"}
            </button>
          </div>
          <div className="flex h-full flex-row items-center justify-center space-x-2 pt-8">
            {testimonials.map((testimonial) => (
              <span
                key={testimonial.id}
                className={cn(
                  "h-2 w-2 cursor-pointer rounded-full bg-black/25",
                  currentTestimonial == testimonial.id && "bg-black/75"
                )}
                onClick={() => {
                  setCurrentTestimonial(testimonial.id);
                }}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Testimonials;
