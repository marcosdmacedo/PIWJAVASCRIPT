import { NavLink } from "react-router-dom";
import "./Navegador.css"

export default function Navegador(){
    return(
        <nav className="navegador">
            <span className="logotipo" >Logo</span>
            <div className="barra-esquerda">
                <NavLink className="botao" to="/PaginaPostar">Postar</NavLink>
                <NavLink className="botao" to="/PaginaFeed">Linha do Tempo</NavLink>
                
                <span className="usuario">@Marcos</span>
            </div>
        </nav>
    )
}