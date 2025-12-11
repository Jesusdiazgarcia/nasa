import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";


export default function Prueba() {

    const apiKey = "GKRrLKc3695VcadFLNMpUYpV7Vj0tIPwUeIq0cmz"
    const link = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


    const { data: datos, loading, error } = useFetch(link)

    if (loading) return <p>Cargando datos</p>
    if (error) return <p>Error: {error.message}</p>

    return (
        <div>
            {!loading && datos && (
                <div>
                    <p>{datos.title}</p>
                    <img src={datos.url} alt={datos.title} />
                    <p>{datos.explanation}</p>
                </div>
            )}
        </div>
    )
}