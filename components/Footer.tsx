import Link from "next/link";

import Logo from "components/Logo";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

const FooterData = [
    // {
    //     title: "Home",
    //     href: "/",
    //     children: []
    // },
    {
        title: "Fachgebiete",
        href: "/fachgebiete",
        children: [
            {
                title: "Photovoltaik",
                href: "/fachgebiete/photovoltaik",
            },
            {
                title: "E-Auto",
                href: "/fachgebiete/e-auto",
            },
            {
                title: "Energieeffizienz",
                href: "/fachgebiete/energieeffizienz",
            },
            {
                title: "Batteriespeicher",
                href: "/fachgebiete/batteriespeicher",
            },
        ],

    },
    {
        title: "Projekte",
        href: "/projekte",
        children: [
            {
                title: "Familie Dagobert",
                href: "/projekte/familie-dagobert",
            },
            {
                title: "Familie Müller",
                href: "/projekte/familie-mueller",
            },
            {
                title: "Familie Meier",
                href: "/projekte/familie-meier",
            },
        ],
    },
    {
        title: "Über uns",
        href: "/ueber-uns",
        children: [
            {
                title: "Mitarbeiter",
                href: "/ueber-uns/mitarbeiter",
            },
            {
                title: "Kontakt",
                href: "/ueber-uns/kontakt",
            },
            {
                title: "Karriere",
                href: "/ueber-uns/karriere",
            },
        ],
    },

    {
        title: "Rechtliches",
        href: "/rechtliches",
        children: [
            {
                title: "AGB",
                href: "/rechtliches/agb",
            },
            {
                title: "Datenschutz",
                href: "/rechtliches/datenschutz",
            },
            {
                title: "Impressum",
                href: "/rechtliches/impressum",
            },
        ],
    },
]


const Footer = () => (
    <section className=" h-full bg-zinc-700 text-white pt-32 pb-16 md:px-16">
        <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex flex-col justify-center">
                <Logo />
                <p className="text-sm max-w-xs pt-6">
                    „Die Gegenwart gehört ihnen, die Zukunft, für die ich gearbeitet habe, gehört mir.“ <br />
                    - Nikola Tesla
                </p>
                <div className="flex space-x-4 pt-4" id="socials">
                    <Link href="/">
                        <a className="">
                            <InstagramLogo size={32} />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="">
                            <TwitterLogo size={32} />
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="">
                            <YoutubeLogo size={32} />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="flex flex-row space-x-8 flex-wrap ">
                {FooterData.map((item, index) => (
                    <div className="flex flex-col justify-start space-y-1" key={index}>
                        <Link href={item.href}>
                            <a className="font-bold pb-4 hover:underline decoration-white">{item.title}</a>
                        </Link>
                        {item.children.map((child, index) => (
                            <Link href={child.href} key={index}>
                                <a className="text-sm hover:underline decoration-white">{child.title}</a>
                            </Link>
                        ))}
                    </div>
                ))}

            </div>


        </div>
        <div className="mt-16 border-b-2 w-full border-white"></div>
        <span className=" pt-2 float-right">
            &copy; {new Date().getFullYear() || 2022}  Volker Voltaik
        </span>

    </section>

);

export default Footer;