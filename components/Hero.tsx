import Link from "next/link";
import Image from "next/image";
import { Image as DatoImg } from "react-datocms";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SectionContainer from "components/SectionContainer";
import ContactButton from "components/ContactButton";
import InfoTag from "components/InfoTag";

import heroImage from "img/pexels-erik-karits-10268580.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },

    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = ({ projects }) => {
  return (
    <SectionContainer className="pt-8">
      <div className="flex flex-col items-start justify-center gap-8 pb-32">
        <div className="">
          <Link
            className=" font-medium uppercase text-yellow hover:text-darkYellow hover:underline"
            href={"/"}
          >
            Volker Voltaik
          </Link>
          <h1 className="max-w-sm font-display text-3xl leading-9">
            Wir helfen Ihnen Ihre Stromkosten zu minimieren
          </h1>
        </div>
        <ContactButton href="#kontakt" />
      </div>
      <div className="relative w-full">
        <h2 className="absolute -top-20 right-0 z-30 ml-60 max-w-xs border-l-2 border-black pl-4 text-xl font-light text-black decoration-black">
          Installation von Photovoltaikanlagen, Stromspeicher und Umwelzpumpen
        </h2>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          focusOnSelect={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          arrows={true}
          // centerMode={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          customTransition="all 1"
          transitionDuration={500}
          containerClass="carousel-container px-0 mx-0 ease-in-out duration-500"
          removeArrowOnDeviceType={["mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style  "
          itemClass="ease-in-out duration-500 mb-12 md:mb-0"
        >
          {projects.map((p, index) => (
            <HeroCard key={p.id} project={p} />
          ))}
        </Carousel>
      </div>
    </SectionContainer>
  );
};

export default Hero;

const HeroCard = ({ project }) => {
  return (
    <div className="relative w-full">
      <DatoImg
        data={project.image.responsiveImage}
        layout="responsive"
        objectFit="cover"
        className="h-50screen min-h-full w-full object-cover pt-16"
      />
      <Link
        href={`/projekte/${project.slug}`}
        className="group flex w-full justify-between px-4 pt-8 "
      >
        <h4 className="font-semibold text-white group-hover:underline">
          {project.title}
        </h4>
        <div className="flex gap-4">
          <InfoTag text={project.city} />
          <InfoTag text={project.power + " kW"} />
        </div>
      </Link>
    </div>
  );
};
