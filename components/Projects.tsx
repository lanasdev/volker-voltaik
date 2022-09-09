import Link from "next/link";
import Image from "next/image";
import SectionContainer from "./SectionContainer";

const projekte = [
    {
        slug: "solar-heimsheim",
        name: "Solar Heimsheim",
        description: "Solaranlage auf dem Dach des Heimsheimer Rathauses",
        image: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    },
    {
        slug: "solar-oberderdingen",
        name: "Solar Oberderdingen",
        description: "Solaranlage auf dem Dach des Oberderdinger Rathauses",
        image: "https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
        slug: "Einkaufmarkt-Heilbronn",
        name: "Einkaufmarkt Heilbronn",
        description: "Einkaufsmarkt in Heilbronn",
        image: "https://images.unsplash.com/photo-1501494278684-d0fb421388ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        slug: "solar-münchen-2",
        name: "Solar München 2",
        description: "Solaranlage auf dem Dach des Münchener Rathauses",
        image: "https://images.unsplash.com/photo-1605980413988-9ff24c537935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

    },
    {
        slug: "solar-köln",
        name: "Solar Köln",
        description: "Solaranlage auf dem Dach des Kölner Rathauses",
        image: "https://images.unsplash.com/photo-1626251376234-8bc112f0bcd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
        slug: "Einkaufmarkt-Hamburg",
        name: "Einkaufmarkt Hamburg",
        description: "Einkaufsmarkt in Hamburg",
        image: "https://images.unsplash.com/photo-1501494278684-d0fb421388ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
]

const Projects = () => {
    return (
        <SectionContainer>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-16 pb-24">
                {projekte.map((projekt) => (
                    <Link href={`/projekte/${projekt.slug}`} key={projekt.slug}>
                        <a className="flex flex-col items-start justify-start">
                            <div className="relative aspect-square w-72">
                                <Image
                                    className="rounded-md"
                                    src={projekt.image}
                                    alt={projekt.name}
                                    layout="fill"
                                    objectFit="cover"

                                />
                            </div>

                            <h3 className="text-xl font-bold mt-6">{projekt.name}</h3>
                            <p className="text-gray-500 mt-2 max-w-sm text-sm">{projekt.description}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </SectionContainer>
    )
}



export default Projects