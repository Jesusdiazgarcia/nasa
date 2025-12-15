import PropTypes from 'prop-types';
import { getHeightClass, formatDate } from '../utils/marsUtils';

/**
 * Tarjeta individual de imagen de Marte con efecto masonry
 */
export default function MarsImageCard({ imagen, index, onClick }) {
    const heightClass = getHeightClass(index);
    const showKeywordBadge = imagen.keywords && imagen.keywords.length > 0 && index % 3 === 0;

    // Calcular delay para efecto stagger (cada tarjeta aparece 0.1s después de la anterior)
    const animationDelay = `${index * 0.1}s`;

    return (
        <div
            onClick={() => onClick(imagen)}
            className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-moradoscuro transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 break-inside-avoid mb-6 animate-fadeUp"
            style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                animationDelay,
            }}
        >
            <div className={`relative ${heightClass} w-full overflow-hidden`}>
                <img
                    src={imagen.img_src}
                    alt={imagen.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-moradoscuro/0 to-transparent group-hover:via-moradoscuro/20 transition-all duration-500"></div>
            </div>

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg mb-2 line-clamp-2 drop-shadow-lg">
                    {imagen.title}
                </p>
                <div className="flex items-center justify-between text-xs text-gris">
                    <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        {formatDate(imagen.date, true)}
                    </span>
                    <span className="bg-moradoscuro/50 px-3 py-1 rounded-full backdrop-blur-sm">
                        {imagen.photographer}
                    </span>
                </div>

                {/* Indicador de "ver más" */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-azulluminoso text-sm">
                        <span>Ver detalles</span>
                        <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Badge de keywords */}
            {showKeywordBadge && (
                <div className="absolute top-4 right-4 bg-moradoscuro/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">
                    {imagen.keywords[0]}
                </div>
            )}
        </div>
    );
}

MarsImageCard.propTypes = {
    imagen: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        img_src: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        photographer: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
};
