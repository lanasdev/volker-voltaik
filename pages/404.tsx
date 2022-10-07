import Link from "next/link";

import Layout from "components/Layout";

const Custom404 = () => (
    <Layout>
        <div className="min-h-[90vh] grid place-content-center ">
            <iframe src="https://giphy.com/embed/40dKW6YzxEAvAQWO19" className="" ></iframe>
            <h1 className="text-2xl md:text-4xl font-semibold pb-2 pt-4">404 - Seite nicht gefunden</h1>
            <Link href="/">
                <a className="hover:underline hover:decoration-yellow">Zurück zur Homepage</a>
            </Link>
        </div>
    </Layout>
);


export default Custom404;