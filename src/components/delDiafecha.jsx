import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";



export default function DelDiafecha() {
    /* este link hace fetch a lo de la imagen diaria de la NASA */
    const apiKey = "GKRrLKc3695VcadFLNMpUYpV7Vj0tIPwUeIq0cmz"


    // Usamos la fecha LOCAL para evitar pedir "mañana" por error de zona horaria
    // Usamos la fecha LOCAL para evitar pedir "mañana" por error de zona horaria
    const today = new Date().toLocaleDateString('en-US');
    const [fecha, setFecha] = useState(''); // Fecha activa (trigger del fetch)
    const [busqueda, setBusqueda] = useState(today); // Estado del input (buffer)
    const [mostrarTexto, setMostrarTexto] = useState(false); // Toggle para "Leer más"

    const link = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fecha}`
    const { data: datos, loading, error } = useFetch(link)

    function handleTexto() {
        setMostrarTexto(!mostrarTexto);
    }

    function handleSearch() {
        if (busqueda.trim()) {
            setFecha(busqueda);
        }
    }
    if (loading) return (
        <div className="container mx-auto mt-24 px-6">
            {/* Search Skeleton */}
            <div className="mb-8 bg-Base-morada/50 py-6 px-10 rounded-3xl max-w-xl mx-auto border border-white/5 animate-pulse">
                <div className="h-6 bg-white/10 rounded w-2/3 mx-auto mb-6"></div>
                <div className="flex gap-4 justify-center">
                    <div className="h-10 bg-white/10 rounded-xl w-48"></div>
                    <div className="h-10 bg-white/10 rounded-xl w-24"></div>
                </div>
            </div>


        </div>
    )
    if (error) return <p className="text-red-500 text-center mt-10">Error: {error.message}</p>

    return (
        <div className="container mx-auto mt-24 mb-13 px-6 ">
            <div className="text-center mb-8">
                <h4 className="text-4xl font-bold font-space text-text-color">Busqueda de la Imagen del dia</h4>
                <p className="text-base font-bold font-space text-gris">En esta seccion puedes ver la imagen del dia de la fecha que busques</p>

            </div>

            <div className="mb-8 bg-Base-morada py-6 px-10 text-center rounded-3xl max-w-xl mx-auto border border-white/5 shadow-xl">
                <p className="text-lg font-bold font-space text-gris">Usa el calendario para buscar la imagen de ese dia</p>
                <div className="flex items-center justify-center gap-4 mt-6 ">
                    <input
                        type="date"
                        max={today} // No permitir fechas futuras
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="p-2 border border-text-color rounded-xl bg-transparent text-text-color "
                    />
                    <button
                        className="p-2 px-6 rounded-xl bg-azulluminoso text-text-color font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSearch}
                        disabled={!busqueda.trim()}
                    >
                        Buscar
                    </button>
                </div>
            </div>

            {!loading && datos && (
                <div className="grid grid-cols-2 gap-8 items-center">
                    {/* Imagen con Overlay */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_1px_#a855f7] hover:shadow-[0_0_5px_#a855f7] transition-all duration-750    border border-white/10 group">
                        {datos.media_type === "video" ? (
                            <iframe
                                className="w-full h-full object-cover min-h-[300px] aspect-video"
                                src={datos.url}
                                title={datos.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <img
                                src={datos.url}
                                alt={datos.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        )}

                        {/* Overlay Gradiente */}
                        {datos.media_type === "image" ? (
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6">
                                <p className="text-gris font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
                                    {datos.date}
                                </p>
                                <p className="text-white font-bold text-lg">
                                    {datos.copyright ? `Foto por: ${datos.copyright}` : "Foto por: NASA Public Domain"}
                                </p>
                            </div>
                        ) : null}

                    </div>
                    {/* Texto y boton */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-bold font-space text-text-color">{datos.title}</h3>
                        <p className="text-gris text-sm mb-4">Fecha: {datos.date}</p>

                        {!mostrarTexto ? (
                            <p className="text-gray-300 text-pretty font-space leading-relaxed line-clamp-6">
                                {datos.explanation}
                            </p>
                        ) : (
                            <p className="text-gray-300 text-pretty font-space leading-relaxed">
                                {datos.explanation}
                            </p>
                        )}

                        <button onClick={handleTexto} className="w-fit flex items-center gap-2 bg-[#4b2bee] hover:bg-[#3b21c4] text-text-color px-6 py-3 rounded-xl font-semibold font-space transition-all duration-750 shadow-lg shadow-[#4b2bee]/50 mt-5 group">
                            {mostrarTexto ? "Leer menos" : "Leer historia completa"}
                        </button>

                    </div>
                </div>
            )}

        </div>
    )
}