import { NavLink, useNavigate } from "react-router-dom";
import "./Navegador.css"
import { useContext } from "react";
import  preto  from ".././Imagem/preto.png"
import { AuthContext } from "../../../App";


function NavegadorLogado({nome}){
    let navigate = useNavigate()
    
    //setar logout
    function populateStorage() {
        localStorage.clear();
        navigate("/PaginaFeed/PaginaLogin")
      }
    return(
        <nav className="navegador">
            <a href="/PaginaFeed"><img className="logotipo" src={preto}></img></a>
            <div className="barra-esquerda">
                <div className="botao" onClick={populateStorage} >
                    logout
                </div><hr className="hr"/>

                <NavLink className="botao" to="/PaginaPostar">postar</NavLink><hr className="hr"/>
                <NavLink className="botao" to="/PaginaFeed">linha do tempo</NavLink><hr className="hr"/>

                <div className="usuario-1">
                    {nome}
                </div>
                
            </div>
        </nav>
    )
}
function NavegadorNaoLogado(){
    return(
        <div className="corpo-nav">
                <nav className="navegador">
                <a href="/PaginaFeed"><img className="logotipo" src={preto}></img></a>
                <div className="barra-esquerda">
                    <NavLink className="botao" to="/PaginaFeed/PaginaLogin">login</NavLink><hr className="hr" />
                    <NavLink className="botao" to="/PaginaFeed/PaginaCadastro">cadastrar</NavLink> 
                </div>
            </nav>
            {/* <img className="img" src={preto}></img> */}
        </div>
    )
}

export default function Navegador(){ 
    let {auth} = useContext(AuthContext);
    return(
        <div>
            {
                auth.token==null? <NavegadorNaoLogado></NavegadorNaoLogado> :
                <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </div>
        
    )
}