import MiniTarjetasLuz from "./minitarjetasLuz";
import MiniTarjetasMisiones from "./minitarjetasMisiones";
import MiniTarjetasExo from "./minitarjetasExo";
export default function SectionUniverse() {

    const apiKey = "GKRrLKc3695VcadFLNMpUYpV7Vj0tIPwUeIq0cmz";
    return (
        <div className="container mx-auto mt-24 mb-8  px-6">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                <h3 className="text-3xl font-bold font-space text-text-color">El universo en tus manos</h3>

            </div>
            <div className="grid grid-cols-12 gap-6">
                <MiniTarjetasLuz titulo="Años luz explorados" numero="13 millones" />
                <MiniTarjetasExo titulo="Exoplanetas Descubiertos " numero="6000+" />
                <MiniTarjetasMisiones titulo="Misiones Activas" numero="8" />
            </div>

        </div>
    )
}