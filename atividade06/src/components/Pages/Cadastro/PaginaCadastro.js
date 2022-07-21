import "./PaginaCadastro.css";
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from "react-router-dom";
import  preto  from "../../Commom/Imagem/preto.png"
import { useContext } from "react";
import { AuthContext } from "../../../App";
import { criarCadastro } from "../../api/auth.api";

export function PaginaCadastro(){

    let {register, handleSubmit} = useForm();
    let navigate = useNavigate();

    let auth = useContext(AuthContext);

    let fazerCadastro = (usuario) => {
        criarCadastro(usuario).then(
            function(response){
                let token = response.data.token;
                let nome = response.data.nome;
                console.log(response.data)
                auth.setAuth(token, nome);
                navigate("/PaginaFeed/PaginaLogin");
            }
        ).catch(
            function(error){
                console.log(error.response.data)
        })
    }
    return(
        <div className="cadastro">
            <div className="nav-superior">
                <img className="img" src={preto}></img>
            </div>
            <div className="caixa">
                <h3 className="h3-2">Cadastro</h3>
                <form className="inputs" onSubmit={handleSubmit(fazerCadastro)}>
                    Nome: <input className="nome" type="text" {...register("nome")}
                    ></input><br/>
                    Email: <input className="email" type="email" {...register("email")}
                    ></input><br/>
                    Senha: <input className="senha" type="password" {...register("senha")}
                    ></input><br/>
                    <input className="enviar-1" type="submit"></input>
                </form>
                <div className="nav-inferior">
                    <NavLink className="conta-login" to="/PaginaFeed/PaginaLogin">Já tenho conta!</NavLink>
                    <a className="conta-login"></a>
                </div>
            </div>
        </div>
    )
}