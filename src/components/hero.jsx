import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <div className="relative flex items-center justify-center flex-col h-screen overflow-hidden">

            {/* Fondo de Galaxia */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-Base via-transparent to-Base z-10"></div>
                <div className="absolute inset-0 bg-radial-[circle_at_center_var(--color-moradoscuro)] opacity-20 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Galaxy Background"
                    className="w-full h-full object-cover opacity-75"
                />
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center">
                <p className="flex text-xs items-center gap-2 uppercase font-space text-gris text-center bg-grish border border-gris px-4 py-1 rounded-full w-fit mb-4 backdrop-blur-md">
                    <span className="w-3 h-3 rounded-full bg-moradoscuro animate-pulse"></span>
                    Datos en vivo de La api de la NASA
                </p>
                <h1 className="text-8xl font-black uppercase font-space text-center">Explora lo <br />
                    <span className="bg-linear-to-r from-text-color to-gray-400 bg-clip-text text-transparent">
                        Desconocido</span></h1>

                <p className="text-xl  mt-6 font-space text-center text-gris">
                    Una ventana inmersiva al cosmos. Descubre galaxias lejanas, <br /> nebulosas brillantes y los secretos de nuestro sistema solar <br /> impulsado por la API de la NASA.
                </p>
                <Link to="/" className="mt-6 px-6 py-2 rounded-full bg-azulluminoso text-text-color font-space hover:scale-105 transition-transform duration-300  ">
                    Comenzar Viaje →
                </Link>
            </div>
        </div>
    )
}