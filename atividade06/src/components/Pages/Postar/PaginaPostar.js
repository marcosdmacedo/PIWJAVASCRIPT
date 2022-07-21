import { NavLink, useNavigate } from "react-router-dom";
import Navegador from "../../Commom/Navegador/Navegador";
// import { Footer } from "../Footer/Footer";
import "./PaginaPostar.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../App";
import { EnviarPosts } from "../../api/posts.api";

export function PaginaPostar(){
    let { register, handleSubmit} = useForm();
    let navigate = useNavigate()
    let {auth} = useContext(AuthContext);

    let tratarSubmit = (post) => {
        EnviarPosts(post).then(
            function(response){
                let token = response.data.token;
                console.log(post)
                console.log(response);
                auth.setAuth(token);
                // navigate("/PaginaFeed");   
            }
        ).catch(
            function(error){
                console.log(error.response.data)
        })
    }
    return(
        <div className="pagina">
            <Navegador></Navegador>
            <div className="caixa-2">
                <h3 className="h3-0">Enviar Post</h3>
                <form className="inputs" onSubmit={handleSubmit(tratarSubmit)}>
                    <input classname="texto" type="text" {...register("texto")}
                    ></input><br/>
                    <span className="enviar-1">Enviar</span>
                </form>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}
