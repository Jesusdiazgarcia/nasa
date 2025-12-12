/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "Base": "#050505",
                "Base-morada": "#0F0B1E",
                "azulluminoso": "#06B6D4",
                "moradoscuro": "#A855F7",
                "text-color": "#f8fafc",
                "gris": "#9CA3AF",
                "bordeui": "#292348",
            },

            fontFamily: {
                'texto': ['Lato', 'sans-serif'],        // Alias 'font-lato'
                'titulo': ['Montserrat', 'sans-serif'], // Alias 'font-montserrat'
                'space': ['"Space Grotesk"', 'sans-serif'],
            },
            backgroundImage: {
                'space-gradient': 'radial-gradient(circle at center, #1b1436 0%, #050505 100%)',
            }
        },
    },
    plugins: [],
}
