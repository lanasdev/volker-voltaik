import Link from "next/link";
import Image from "next/image";
import Layout from "components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import HeroSection from "components/HeroSection";

import Testimonials from "components/Testimonials";
import Contact from "components/Contact";
import Projects from "components/Projects";

const IndexPage = () => (
  <Layout title="Volker Voltaik">
    <HeroSection />
    {/* <div className="absolute bottom-0 right-0 left-0 w-full h-full bg-yellow z-0 skew-y-3 origin-top-left"></div> */}
    {/* <div className="h-40"></div> */}
    <Projects />
    <Testimonials />
    <Contact />
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
