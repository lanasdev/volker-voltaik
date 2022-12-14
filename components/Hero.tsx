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
            className=" font-medium uppercase text-yellow hover:text-darkYellow hover:underline md:text-xl"
            href={"/"}
          >
            Volker Voltaik
          </Link>
          <h1 className="font-display max-w-sm text-3xl leading-9 md:text-4xl md:leading-10 xl:text-5xl">
            Wir helfen Ihnen Ihre Stromkosten zu minimieren
          </h1>
        </div>
        <ContactButton href="#kontakt" />
      </div>
      <div className="relative w-full">
        <h2 className="absolute -top-20 right-0 z-30 ml-60 max-w-xs border-l-2 border-black pl-4 text-xl font-light text-black decoration-black md:text-2xl ">
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
    <Link
      href={`/projekte/${project.slug}`}
      className="relative inline-block w-full"
    >
      <DatoImg
        data={project.image.responsiveImage}
        layout="responsive"
        objectFit="cover"
        className="h-50screen min-h-full w-full object-cover pt-16"
      />
      <div className="group flex w-full justify-between pt-8 md:px-4 ">
        <h4 className="font-semibold text-white group-hover:underline">
          {project.title}
        </h4>
        <div className="flex gap-4">
          <InfoTag text={project.city} />
          <InfoTag text={project.power + " kW"} />
        </div>
      </div>
    </Link>
  );
};

export const HeroSkeleton = ({ projects }) => {
  const project = projects[0];
  return (
    <SectionContainer className="pt-8">
      <div className="flex flex-col items-start justify-center gap-8 pb-32">
        <div className="">
          <Link
            className=" font-medium uppercase text-yellow hover:text-darkYellow hover:underline md:text-xl"
            href={"/"}
          >
            Volker Voltaik
          </Link>
          <h1 className="font-display max-w-sm text-3xl leading-9 md:text-4xl md:leading-10 xl:text-5xl">
            Wir helfen Ihnen Ihre Stromkosten zu minimieren
          </h1>
        </div>
        <ContactButton href="#kontakt" />
      </div>
      <div className="relative w-full">
        <h2 className="absolute -top-20 right-0 z-30 ml-60 max-w-xs border-l-2 border-black pl-4 text-xl font-light text-black decoration-black md:text-2xl ">
          Installation von Photovoltaikanlagen, Stromspeicher und Umwelzpumpen
        </h2>
        <div className="mx-0 px-0 duration-500 ease-in-out">
          {/* Hero Card */}
          <Link href={`/projekte/${project.slug}`} className="relative w-full">
            <Image
              src={project.image.responsiveImage.src}
              width={project.image.responsiveImage.width}
              height={project.image.responsiveImage.height}
              alt={project.image.alt}
              priority={true}
              className="h-50screen min-h-full w-full object-cover pt-16"
            />
            <div className="group flex w-full justify-between pt-8 md:px-4 ">
              <h4 className="font-semibold text-white group-hover:underline">
                Cooles Solar Projekt
              </h4>
              <div className="flex gap-4">
                <InfoTag text={"Stuttgart"} />
                <InfoTag text={"777" + " kW"} />
              </div>
            </div>
          </Link>
          {/* Hero Card end */}
        </div>
      </div>
    </SectionContainer>
  );
};
