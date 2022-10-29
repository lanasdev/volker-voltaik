import Link from "next/link";
import Image from "next/image";
import SectionContainer from "./SectionContainer";


const Projects = ({ projekte }) => {
    return (
        <SectionContainer>
            <h2 className="text-xl md:text-2xl font-semibold py-16 ">Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-x-12 gap-y-16 pb-24 ">
                {projekte.map((projekt) => (
                    (<Link
                        href={`/projekte/${projekt.slug}`}
                        key={projekt.slug}
                        className="flex flex-col items-start justify-start">

                        <div className="relative aspect-square ">
                            <Image
                                className="rounded-md"
                                src={projekt.image}
                                alt={projekt.name}
                                width={500}
                                height={500}
                            />
                        </div>
                        <h3 className="text-xl font-bold mt-6">{projekt.name}</h3>
                        <p className="text-gray-500 mt-2 md:w-72 text-sm">{projekt.description + " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos doloribus aliquid provident mollitia. Itaque, illum?"}</p>

                    </Link>)
                ))}

            </div>
        </SectionContainer>
    );
}



export default Projects