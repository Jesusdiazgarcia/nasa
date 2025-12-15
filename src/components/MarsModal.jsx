import PropTypes from 'prop-types';
import { formatDate } from '../utils/marsUtils';

/**
 * Modal split-screen para mostrar detalles de imagen de Marte
 */
export default function MarsModal({ imagen, isOpen, onClose }) {
    if (!isOpen || !imagen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.92)',
                backdropFilter: 'blur(8px)',
            }}
            onClick={onClose}
        >
            {/* Contenedor del modal */}
            <div
                className="relative w-full max-w-7xl h-[85vh] animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 md:top-4 md:right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-moradoscuro hover:rotate-90 transition-all duration-300 z-20"
                    aria-label="Cerrar modal"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Layout Split-Screen */}
                <div className="flex flex-col md:flex-row h-full bg-Base-morada rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                    {/* Lado izquierdo - Imagen */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex items-center justify-center p-4 md:p-8">
                        <img
                            src={imagen.img_src}
                            alt={imagen.title}
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>

                    {/* Lado derecho - Contenido */}
                    <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-6 md:p-10 flex flex-col">

                        {/* Badges superiores */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-moradoscuro/20 text-moradoscuro px-3 py-1 rounded-lg text-xs font-semibold border border-moradoscuro/30">
                                {formatDate(imagen.date)}
                            </span>
                            <span className="bg-azulluminoso/20 text-azulluminoso px-3 py-1 rounded-lg text-xs font-semibold border border-azulluminoso/30">
                                {imagen.photographer}
                            </span>
                        </div>

                        {/* Título */}
                        <h2 className="text-3xl md:text-4xl font-bold font-space text-white mb-6 leading-tight">
                            {imagen.title}
                        </h2>

                        {/* Descripción */}
                        <div className="mb-6 flex-grow">
                            <h3 className="text-xs uppercase tracking-widest text-azulluminoso font-bold mb-3 flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-azulluminoso"></div>
                                Descripción
                            </h3>
                            <p className="text-gris text-sm md:text-base leading-relaxed">
                                {imagen.description}
                            </p>
                        </div>

                        {/* Keywords */}
                        {imagen.keywords && imagen.keywords.length > 0 && (
                            <div className="mt-auto">
                                <h3 className="text-xs uppercase tracking-widest text-azulluminoso font-bold mb-3 flex items-center gap-2">
                                    <div className="w-8 h-0.5 bg-azulluminoso"></div>
                                    Etiquetas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {imagen.keywords.slice(0, 8).map((keyword, index) => (
                                        <span
                                            key={index}
                                            className="bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs border border-white/10 hover:border-moradoscuro/50 transition-all duration-200"
                                        >
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

MarsModal.propTypes = {
    imagen: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        img_src: PropTypes.string,
        date: PropTypes.string,
        photographer: PropTypes.string,
        description: PropTypes.string,
        keywords: PropTypes.arrayOf(PropTypes.string),
    }),
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};
