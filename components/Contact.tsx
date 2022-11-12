import SectionContainer from "components/SectionContainer";
import { Envelope, Phone } from "phosphor-react";
import Contactform from "components/Contactform";
import cn from "classnames";

type ContactProps = {
  isHome: boolean;
};

const Contact = () => {
  return (
    <div className="-mt-32 bg-black text-white" id="kontakt">
      <SectionContainer className="-z-10 pb-16 pt-32 md:gap-16 md:pb-16">
        <div className="flex flex-col items-stretch justify-between md:flex-row ">
          <div className="flex-1 md:pr-16">
            <h3 className="max-w-xs text-3xl font-semibold">
              Bringen Sie Licht in Ihr Haus - nachhaltig
            </h3>
            <div className="flex flex-col items-start justify-start gap-4 pt-14">
              <p>
                Bismarkstrasse 17 <br /> 70111 Stuttgart{" "}
              </p>
              <a
                href="mailto:matthias@lanas.dev"
                className="flex flex-row items-center justify-center gap-4 ease-in-out hover:underline hover:underline-offset-2"
              >
                <Envelope size={32} />
                <p>matthias@lanas.dev</p>
              </a>
              <a
                href="tel:+49 0711 123456"
                className="flex flex-row items-center justify-center gap-4 ease-in-out hover:underline hover:underline-offset-2"
              >
                <Phone size={32} />
                <p>+49 0711 123456</p>
              </a>
            </div>
          </div>
          <hr className="my-16 border-yellow" />
          <Contactform />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Contact;
