import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";


export default function DelDia() {
    /* este link hace fetch a lo de la imagen diaria de la NASA */
    const apiKey = "GKRrLKc3695VcadFLNMpUYpV7Vj0tIPwUeIq0cmz"
    const link = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    const [texto, setTexto] = useState(true)
    const { data: datos, loading, error } = useFetch(link)
    function handleTexto() {
        if (texto) {
            setTexto(false)
        } else {
            setTexto(true)
        }
    }
    if (loading) return <p>Cargando datos</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="container mx-auto mt-24 mb-13 px-6 ">
            <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
                <h3 className="text-3xl font-bold font-space text-text-color">Imagen del dia de la NASA</h3>
                <p className="text-gris text-sm mb-1">Actualizado diariamente</p>
            </div>





            {!loading && datos && (
                <div className="grid grid-cols-2 gap-8 items-center">
                    {/* Imagen con Overlay */}
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_3px_#a855f7] hover:shadow-[0_0_5px_#a855f7] transition-all duration-750    border border-white/10 group">
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
                                <p className="text-[#a855f7] font-bold tracking-widest text-sm mb-2 flex items-center gap-2">
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

                        {texto ? <p className="text-gray-300 text-pretty    font-space leading-relaxed line-clamp-6">
                            {datos.explanation}
                        </p> : <p className="text-gray-300 text-pretty font-space leading-relaxed ">
                            {datos.explanation}
                        </p>}
                        <button onClick={handleTexto} className="w-fit flex items-center gap-2 bg-[#4b2bee] hover:bg-[#3b21c4] text-text-color px-6 py-3 rounded-xl font-semibold font-space transition-all duration-750 shadow-lg shadow-[#4b2bee]/50 mt-5 group">
                            Leer historia completa

                        </button>

                    </div>
                </div>
            )}

            <div className="container mx-auto mt-24 mb-13 px-6 flex items-center flex-col gap-2">
                <h2 className="text-2xl font-bold font-space text-text-color">¿Te interesa ver mas imagenes del dia?</h2>
                <h3 className="text-2xl font-bold font-space text-text-color"></h3>
                <Link to="/DelDiafecha" className="flex items-center  bg-[#4b2bee] hover:bg-[#3b21c4] text-text-color px-6 py-3 rounded-xl font-semibold font-space transition-all duration-750  mt-5 group">
                    Ver mas
                </Link>
            </div>
        </div>
    )
}