import { useState, useEffect } from "react";
import MarsImageCard from "./MarsImageCard";
import MarsModal from "./MarsModal";
import { fetchMarsImages } from "../utils/marsUtils";

/**
 * Componente principal de la galería de Marte
 * Muestra imágenes de la NASA en un layout masonry con modal de detalles
 */
export default function Marte() {
    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    useEffect(() => {
        const loadImages = async () => {
            try {
                setLoading(true);
                const images = await fetchMarsImages();
                setImagenes(images);
            } catch (err) {
                console.error('Error cargando imágenes:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, []);

    const handleImageClick = (imagen) => {
        setImagenSeleccionada(imagen);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    // Estados de carga y error
    if (loading) {
        return (
            <div className="container mx-auto mt-24 px-6">
                <p className="text-white text-center text-xl animate-pulse">
                    Cargando galería de Marte...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto mt-24 px-6">
                <p className="text-red-500 text-center text-xl">
                    Error: {error.message}
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-24 px-6 mb-10">
            {/* Header */}
            <header className="text-center mb-12 animate-fadeIn">
                <h1 className="text-4xl font-bold font-space text-text-color uppercase">
                    Galería de Marte
                </h1>
                <p className="text-gris text-lg mt-2">
                    Imágenes de alta calidad de la NASA sobre Marte y sus misiones
                </p>
            </header>

            {/* Masonry Gallery */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {imagenes.map((imagen, index) => (
                    <MarsImageCard
                        key={imagen.id}
                        imagen={imagen}
                        index={index}
                        onClick={handleImageClick}
                    />
                ))}
            </div>

            {/* Modal */}
            <MarsModal
                imagen={imagenSeleccionada}
                isOpen={modalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
}