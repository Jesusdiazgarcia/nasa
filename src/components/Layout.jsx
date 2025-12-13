import { Link, Outlet } from "react-router-dom"
import { FaRocket } from "react-icons/fa6";



export default function Layout() {
  return (
    <>
      <header className="  border-b-2 border-borde bg-header">
        <div className="container mx-auto  grid grid-cols-12 py-5 ">
          <div className="col-span-3 flex items-center">
            <FaRocket className=" text-4xl  text-moradoscuro  " />
            <p className="font-titulo font-bold  text-2xl">Cosmos</p>
          </div>
          <nav className="col-span-9 gap-4 flex justify-center">
            <Link to="/" className="font-texto text-nav self-center hover:text-text-color duration-500 hover:scale-105">Inicio</Link>
            <Link to="/about" className="font-texto text-nav self-center hover:text-text-color duration-500 hover:scale-105">Galeria</Link>
          </nav>
        </div>


      </header>

      <main>
        <Outlet />
      </main>

      <footer className="text-center bg-[#0a0814] text-base text-text-color py-6 border-t-2 border-borde">
        <p>{new Date().getFullYear()} © Creada para informar y practicar codigo por Jesus Diaz con NasaAPI</p>
      </footer>
    </>
  )
}