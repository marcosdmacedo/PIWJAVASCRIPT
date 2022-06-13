import { NavLink } from "react-router-dom";
import Navegador from "../../Commom/Navegador/Navegador";
import { Footer } from "../Footer/Footer";
import "./PaginaPostar.css";

export function PaginaPostar(){
    return(
        <div className="pagina">
            <Navegador></Navegador>
            <div className="elementos_postar">
                <h3 className="seu_post">Seu Post:</h3>
                <div className="inputs">
                    <input className="texto" type="text" ></input>
                    <NavLink className="enviar" to="/PaginaFeed">Enviar</NavLink>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}
