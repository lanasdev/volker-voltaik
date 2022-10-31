import SectionContainer from "components/SectionContainer";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ allTestimonials }) => {
  const testimonialsData = [
    {
      id: 1,
      name: "Reiner Reinhold",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
    {
      id: 2,
      name: "Max Mustermann",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
    {
      id: 3,
      name: "Max Mustermann",
      text: "Von der Anfrage, bis zur Besichtigung und anschließenden Ausführung einfach nur Klasse. Kommunikation super, Termine werden eingehalten - mehr als empfehlenswert!!",
    },
  ];

  return (
    <SectionContainer className="relative pt-12">
      <div className="grid grid-cols-1 gap-8 ">
        {allTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default TestimonialList;
