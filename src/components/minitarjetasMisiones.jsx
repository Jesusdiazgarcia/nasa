import { PiGlobeHemisphereWestFill } from "react-icons/pi";
import { IoPlanetSharp } from "react-icons/io5";
import { MdSatelliteAlt } from "react-icons/md";
export default function MiniTarjetasMisiones({ titulo, numero, }) {
    return (
        <div className="col-span-4 flex justify-start flex-col card2 w-full px-6 py-6 mb-8">

            {/* tercera tarjeta */}

            <div className="flex items-center">
                <MdSatelliteAlt className="text-3xl text-[#06b6d4] animate-pulse mr-3" />
                <p className="text-gris text-sm font-space  uppercase ">{titulo}</p>
            </div>

            <div>
                <p className="text-text-color font-bold  font-space text-4xl mt-3">{numero}</p>
                <p className="text-gris text-base font-space font-semibold mt-3 mb-2">Dato curioso: <span className="text-sm font-space">La mision mas importante fue Voyager 1 y 2 en 1977 ya que vimos Jupiter</span> </p>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-[#06b6d4] w-[30%] rounded-full shadow-[0_0_10px_#06b6d4]"></div>
            </div>



        </div>
    )
}