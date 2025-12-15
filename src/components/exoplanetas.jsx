import useFetch from "../hooks/useFetch.js";


export default function Exoplanetas() {



    // Esta API no usa API KEY como parámetro principal, funciona con SQL ("query")
    // Pedimos los últimos 12 planetas descubiertos (TOP 12 ... ORDER BY disc_year DESC)
    // Usamos un proxy CORS para evitar el bloqueo del navegador
    const query = "select+top+12+pl_name,hostname,disc_year,disc_facility,pl_rade,pl_bmasse,st_teff,sy_dist+from+pscomppars+order+by+disc_year+desc";
    const apiUrl = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=${query}&format=json`;
    const link = `https://corsproxy.io/?${encodeURIComponent(apiUrl)}`;

    const { data: datos, loading, error } = useFetch(link);

    // Función auxiliar para asignar una imagen aleatoria (ya que la API no trae)
    const getPlanetImage = (index) => {
        const images = [
            "https://images.unsplash.com/photo-1701014159251-f86a81a6fe13?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1000",
            "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=1000",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000",
            "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000",
            "https://images.unsplash.com/photo-1701014159141-639d07c4eba4?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1654263391025-4c4809a37f5c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1632395627727-3b97d0724814?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1653089116335-137ea51598a9?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ];
        return images[index % images.length];
    };

    return (
        <div className="container mx-auto mt-24 px-6 mb-10">
            <h1 className="text-4xl font-bold font-space text-text-color mb-8 text-center uppercase">
                Archivo de Exoplanetas <span className="text-gris text-lg block normal-case mt-2">Todas las imagenes son referenciales, ya que no existen imagenes reales de estos planetas. <br /> Estos son unos de los ultimos planetas descubiertos por la NASA</span>
            </h1>

            {loading && <p className="text-white text-center text-xl animate-pulse">Cargando base de datos estelar...</p>}
            {error && <p className="text-red-500 text-center text-xl">Error de conexión: {error.message}</p>}

            {datos && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {datos.map((planeta, index) => (
                        <div key={index} className="bg-Base-morada border border-white/10 rounded-2xl overflow-hidden hover:border-moradoscuro/50 hover:shadow-2xl hover:shadow-moradoscuro/20 transition-all duration-300 group">

                            {/* Imagen (Asignada manualmente) */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-Base-morada to-transparent z-10"></div>
                                <img
                                    src={getPlanetImage(index)}
                                    alt={planeta.pl_name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 relative z-20 -mt-6">
                                <h2 className="text-2xl font-bold font-space text-white mb-4">{planeta.pl_name}</h2>

                                <div className="space-y-3 text-gris text-sm font-space">
                                    <p className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Descubierto en el:</span> <span className="text-azulluminoso font-bold">{planeta.disc_year}</span>
                                    </p>
                                    <p className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Telescopio:</span> <span className="text-white">{planeta.disc_facility}</span>
                                    </p>
                                    <p className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Radio:</span> <span className="text-white">{planeta.pl_rade} x Tierras</span>
                                    </p>
                                    <p className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Distancia:</span> <span className="text-white">{planeta.sy_dist} yl</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}