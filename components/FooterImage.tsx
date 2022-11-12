import Image from "next/image";
import img from "public/img/pexels-kindel-media-9875416.jpg";

const FooterImage = () => (
  <section className="relative">
    <span className="absolute z-10 h-full w-full bg-yellow/30"></span>

    <Image
      src={img}
      alt="Man holding a solar panel"
      className="z-0 h-48 w-screen bg-scroll bg-center object-cover md:h-96  "
    />
  </section>
);

export default FooterImage;
