import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout title="About">
    <h1>Über uns</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        Go home
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
