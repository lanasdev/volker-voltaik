import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
import Head from "next/head";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import ManSolar from "public/img/ManSolar.png"
import CallToAction from "components/CallToAction";

//phosphoricons
import { Sun, Lightning, BatteryChargingVertical } from "phosphor-react"
import LogoBig from "components/LogoBig";

const Leistungen = [
  {
    "name": "Photovoltaik",
    "url": <Sun />,
    "slug": "photovoltaik",
    "id": 0,
  },
  {
    "name": "Elektrische Anlagen",
    "icon": <Lightning />,
    "slug": "elektrische-anlagen",
    "id": 1,
  },
  {
    "name": "Energiespeicher",
    "icon": <BatteryChargingVertical />,
    "slug": "energiespeicher",
    "id": 2,
  },
]

const IndexPage = () => (
  <Layout title="Volker Voltaik">
    <LogoBig />
    <section className="pt-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-start justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold font-display ">Volker Voltaik - Elektroinstallateur</h1>
        <p className="max-w-xl font-regular pt-6 pb-10 leading-7">Es gibt viele Gründe in eine Solaranlage von Volker Voltaik zu investieren. Steigende Gaspreise, mögliche Blackouts oder einfach günstigere Strompreise. Alle Gründe sind legitim und deshalb wir passen immer Ihre Anlage, Ihren wünschen an.</p>
        <CallToAction />
        {/* Leistungen Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold pt-16 pb-8">Unsere Leistungen</h2>
          <div className="flex flex-row w-auto">
            {Leistungen.map((leistung) => (
              <Link href={`/leistungen/${leistung.slug}`} key={leistung.id}>
                <a className="flex flex-col items-center justify-start p-4">
                  <span className="text-2xl font-semibold w-16 h-16 bg-black flex items-center justify-center text-white rounded-full mb-2">{leistung.icon}</span>
                  <p className="text-md font-semibold">{leistung.name + " -->"}</p>
                </a>
              </Link>
            ))}
                
          </div>
        </div>
      </div>
      <Image src={ManSolar} alt="Man holding Volker Voltaik Solar Panel" />
    </section>
  </Layout>
);

// I always forget how to use this function

// export const getStaticProps: GetStaticProps = async (context) => {

//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default IndexPage;
