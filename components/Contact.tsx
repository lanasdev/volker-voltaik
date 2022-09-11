import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Envelope, UserList, MapPin } from "phosphor-react";
import { useEffect, Suspense } from "react";
// import Map from "public/img/map.png";
import SectionContainer from "./SectionContainer";

const DynamicMap = dynamic(() => import('components/Map'), {
  // ssr: false,
  suspense: true,
  loading: () => <p>Loading...</p>,
})
// const DynamicMap = dynamic(() => import('components/MapNew'), {
//   suspense: true
// })

const Contact = () => {
  const iconSize = 32;
  const data = [
    {
      id: 0,
      icon: <PhoneCall size={iconSize} />,
      text: "0123456789",
      href: "tel:0123456789",
    },
    {
      id: 1,
      icon: <Envelope size={iconSize} />,
      text: "hey@example.com",
      href: "mailto:hey@example.columns",
    },
    {
      id: 2,
      icon: <UserList size={iconSize} />,
      text: "Rainer Volker",
      href: "https://www.linkedin.com/in/rainervoltaik/",
    },
    {
      id: 3,
      icon: <MapPin size={iconSize} />,
      text: `Bismarkstrasse 17, \n
                70111 Stuttgart`,
      href: "https://www.google.com/maps/place/Stuttgart",
    },
  ];

  return (
    <section
      className="mt-8 w-full bg-yellow px-4 pt-12 pb-12 text-black md:px-16"
      id="kontakt"
    >
      <SectionContainer>
        <h3 className="text-xl font-semibold">Kontakt</h3>
        <div className="flex flex-col justify-around pt-16 md:flex-row">
          <Suspense fallback={<p>Loading...</p>}>
            <DynamicMap />
          </Suspense>
          <div className="flex flex-col items-baseline justify-center space-y-4 pt-16 md:pt-0 md:pl-8">
            <span className="mb-2 font-semibold">Volker Voltaik GmbH</span>
            {data.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex flex-row items-center justify-center  "
              >
                {item.icon}
                <span className="pl-4">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Contact;
