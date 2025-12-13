import { BiSolidImageAlt } from "react-icons/bi";
import { IoSparklesSharp } from "react-icons/io5";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
export default function Card() {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-6 mt-10 ">

            <div className="col-span-4 flex justify-start flex-col card1 card-hover group">
                <div className="w-full px-6 mb-8 py-6">
                    <div className=" w-12 h-12 rounded-xl bg-[#171138] flex items-center justify-center mt-2 mb-4">
                        <BiSolidImageAlt className="text-2xl text-[#4b2bee] group-hover:animate-ping" />
                    </div>
                    <h4 className="text-text-color text-2xl font-space font-bold">Galería del Espacio</h4>
                    <p className="text-gris text-base mt-3">Explora la Imagen del Día y fotos de <br /> alta resolución de los telescopios <br /> Hubble y James Webb.</p>
                </div>


            </div>

            <div className="col-span-4 flex justify-center card1 card-hover group">
                <div className="w-full px-6 py-6 mb-8">
                    <div className=" w-12 h-12 rounded-xl bg-[#2a1939] flex items-center justify-center mt-2 mb-4">
                        <IoSparklesSharp className="text-2xl text-[#c084fc] group-hover:animate-pulse" />
                    </div>
                    <h4 className="text-text-color text-2xl font-space font-bold">Datos Curiosos</h4>
                    <p className="text-gris text-base mt-3">Descubre hechos sorprendentes <br /> sobre agujeros negros, exoplanetas y <br /> la formación de estrellas.</p>
                </div>
            </div>
            <div className="col-span-4 flex justify-center card1 card-hover group">
                <div className="w-full px-6 py-6 mb-8">
                    <div className=" w-12 h-12 rounded-xl bg-[#092c32] flex items-center justify-center mt-2 mb-4">
                        <BsFillRocketTakeoffFill className="text-2xl text-[#22d3ee] group-hover:animate-bounce" />
                    </div>
                    <h4 className="text-text-color text-2xl font-space font-bold">Misiones Activas</h4>
                    <p className="text-gris text-base mt-3">Sigue el rastro de Artemis, los rovers <br /> de Marte y las sondas Voyager en <br /> tiempo real.</p>
                </div>
            </div>
        </div>
    )
}