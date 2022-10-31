"use client";
import SectionContainer from "components/SectionContainer";
import { Envelope, Phone } from "phosphor-react";
import Contactform from "components/Contactform";

const Contact = () => {
  return (
    <div className="relative -z-10 -mt-32 bg-black/95 text-white">
      <SectionContainer className="z-0 py-16 pt-32">
        <h3 className="max-w-xs text-3xl font-semibold">
          Bringen Sie Licht in Ihr Haus - nachhaltig
        </h3>
        <div className="flex flex-col items-start justify-start gap-4 pt-14">
          <p>
            Bismarkstrasse 17 <br /> 70111 Stuttgart{" "}
          </p>
          <a
            href="mailto:hallo@volkervoltaik.de"
            className="flex flex-row items-center justify-center gap-4 "
          >
            <Envelope size={32} />
            <p>hallo@volkervoltaik.de</p>
          </a>
          <a
            href="tel:0987 3820029"
            className="flex flex-row items-center justify-center gap-4 "
          >
            <Phone size={32} />
            <p>0987 3820029</p>
          </a>
        </div>
        <hr className="my-16 border-yellow" />
        <Contactform />
      </SectionContainer>
    </div>
  );
};

export default Contact;
