// Utilidades para la galería de Marte

/**
 * Obtiene la clase de altura según el patrón de índice
 * @param {number} index - Índice del elemento
 * @returns {string} Clase de Tailwind para la altura
 */
export const getHeightClass = (index) => {
    const sizePattern = index % 7;

    if (sizePattern === 0 || sizePattern === 4) {
        return 'h-96'; // Tall
    } else if (sizePattern === 2 || sizePattern === 5) {
        return 'h-80'; // Medium-tall
    } else if (sizePattern === 1 || sizePattern === 6) {
        return 'h-56'; // Medium
    }

    return 'h-64'; // Default
};

/**
 * Formatea una fecha a formato español
 * @param {string} dateString - Fecha en formato ISO
 * @param {boolean} short - Si es true, usa formato corto
 * @returns {string} Fecha formateada
 */
export const formatDate = (dateString, short = false) => {
    const options = short
        ? { year: 'numeric', month: 'short' }
        : { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(dateString).toLocaleDateString('es-ES', options);
};

/**
 * Procesa un item de la API de NASA y extrae la información necesaria
 * @param {Object} item - Item de la API
 * @returns {Promise<Object|null>} Objeto con datos procesados o null si falla
 */
export const processNasaItem = async (item) => {
    const assetUrl = item.href;

    try {
        const assetResponse = await fetch(assetUrl);
        const assetData = await assetResponse.json();

        // Buscar la imagen de tamaño mediano o grande
        const imageUrl = assetData.find(url =>
            url.includes('medium.jpg') || url.includes('large.jpg') || url.includes('.jpg')
        );

        return {
            id: item.data[0].nasa_id,
            title: item.data[0].title,
            description: item.data[0].description || 'Sin descripción',
            date: item.data[0].date_created,
            photographer: item.data[0].photographer || item.data[0].center || 'NASA',
            img_src: imageUrl || assetData[0],
            keywords: item.data[0].keywords || []
        };
    } catch (err) {
        console.error('Error fetching asset:', err);
        return null;
    }
};

/**
 * Obtiene imágenes de Marte desde la API de NASA
 * @param {string} searchQuery - Término de búsqueda
 * @param {number} pageSize - Número de resultados
 * @returns {Promise<Array>} Array de imágenes procesadas
 */
export const fetchMarsImages = async (searchQuery = "mars rover", pageSize = 16) => {
    const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(searchQuery)}&media_type=image&page_size=${pageSize}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data.collection.items || data.collection.items.length === 0) {
        throw new Error('No se encontraron imágenes');
    }

    // Procesar las imágenes en paralelo
    const imagenesConUrls = await Promise.all(
        data.collection.items.slice(0, pageSize).map(processNasaItem)
    );

    // Filtrar nulls
    return imagenesConUrls.filter(img => img !== null);
};
