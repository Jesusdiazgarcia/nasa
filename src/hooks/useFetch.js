// src/hooks/useFetch.js (MODIFICADO)
import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false) // 🔑 Cambiado a 'false' para el estado inicial
    const [error, setError] = useState(null)

    useEffect(() => {
        // 🔑 VERIFICACIÓN CLAVE: Si la URL es nula o vacía, salimos.
        if (!url) {
            setData(null);
            setLoading(false); // Aseguramos que no se queda cargando si es null
            setError(null);
            return; // ⬅️ Detenemos la ejecución del efecto aquí
        }

        const controller = new AbortController()

        async function getData() {
            try {
                // Aquí el loading se pone a true SÓLO si hay URL
                setLoading(true)
                setError(null)

                const res = await fetch(url, { signal: controller.signal })

                // Si la API devuelve un error (ej. 404), lanzamos el error
                if (!res.ok) {
                    // 🔑 Mejoramos el mensaje para capturar 404/500
                    throw new Error(`Error HTTP: ${res.status} para URL: ${url}`);
                }

                const json = await res.json()
                setData(json)

            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err)
                    setData(null); // Aseguramos que data es null en caso de error
                }
            } finally {
                setLoading(false)
            }
        }

        getData()
        return () => controller.abort()
    }, [url])

    // Si la URL es null al inicio, loading es false y data es null.
    // Esto es ideal para el componente Pokemon.
    return { data, loading, error }
}