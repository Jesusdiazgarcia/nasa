import Hero from "./hero";
import Card from "./card";
import SectionUniverse from "./universe-section";
import DelDia from "./delDia";
import Scroll from "./Subir.jsx";
import DelDiafecha from "./delDiafecha";
import { Link } from "react-router-dom";
export default function Home() {


    return (
        <div>

            <Hero />
            <Card />
            <SectionUniverse />
            <DelDia />
            <Scroll />

        </div>
    )
}