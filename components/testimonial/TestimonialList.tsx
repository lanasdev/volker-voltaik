import SectionContainer from "components/SectionContainer";
import TestimonialCard from "./TestimonialCard";

const TestimonialList = ({ allTestimonials }) => {
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
