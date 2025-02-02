import { client } from "@/sanity/lib/client";
import { car } from "../../../../types/cars";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

interface CarPageProps {
    params: Promise <{slug : string}>
}

async function getCar(slug : string): Promise< car | null > {
    return client.fetch(
       groq `*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        slug,
        image,
        price,
        image {
        asset ->{
        _id,
        url
        }
        }
       } `,{slug} 
    );
}

export default async function CarPage ({params}: CarPageProps){
 const {slug} =await  params;
 const car =await getCar(slug);

 return(
    <div className="max-w-7xl- mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
         {car?.image?.asset && (
                       <img
                         src={urlFor(car.image).url()}
                         alt={car?.name}
                         width={200}
                         height={200}
                         className="rounded-lg shadow-md"
                         />
         )}
        </div>
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
                {car?.name}
            </h1>
            <p className="text-2xl font-sans">
                {car?.price}
            </p>
        </div>
       </div>
    </div>
 )
}
