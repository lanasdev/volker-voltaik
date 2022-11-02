import SectionContainer from "components/SectionContainer";
import TestimonialCard from "components/testimonial/TestimonialCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// const TestimonialsData = [
//   {
//     id: 1,
//     text: "Wir sind sehr zufrieden mit der Arbeit von Fi-Da. Die Mitarbeiter sind sehr freundlich und kompetent. Wir können die Firma nur weiterempfehlen.",
//     author: "Familie Schmid",
//     detail: "aus Filderstadt",
//   },
//   {
//     id: 2,
//     text: "Top Service, Sehr Kompetente Handwerk und verstehen ihren Job sehr gut 5*",
//     author: "Petro Shqiptar",
//     detail: "aus Leinfelden",
//   },
//   {
//     id: 3,
//     text: "Sehr gute Arbeit, sehr freundlich und zuverlässig. Kann ich nur weiterempfehlen.",
//     author: "Max Mustermann",
//     detail: "aus Stuttgart",
//   },
//   {
//     id: 4,
//     text: "Sehr freundliche Firma! Sehr nette Mitarbeiter! Faire Preise! Absolut zu empfehlen!",
//     author: "N. Soysa",
//     detail: "aus Stuttgart",
//   },
// ];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = ({ allTestimonials }) => {
  return (
    <SectionContainer className="relative my-16 py-16 ">
      <h3 className="pb-16 text-2xl font-bold">Was unsere Kunden sagen</h3>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        focusOnSelect={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // centerMode={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container gap-8 h-64"
        removeArrowOnDeviceType={["mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style  "
        itemClass="carousel-item-padding-40-px px-8"
      >
        {allTestimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </Carousel>
      {/* <div className="relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto overscroll-contain pb-14"></div> */}
    </SectionContainer>
  );
};

export default Testimonials;
