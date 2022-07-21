import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../App';
import preto  from "../../Commom/Imagem/preto.png"
import "./PaginaLogin.css";
import { login } from '../../api/auth.api';
import { useContext } from 'react';

export function PaginaLogin(){

    let {register, handleSubmit} = useForm();
    let navigate =  useNavigate();

    let auth = useContext(AuthContext);

    let fazerLogin = (login_data) => {
        login(login_data).then(
            function(response){
                let token = response.data.token;
                let nome = response.data.nome;
    
                auth.setAuth(token, nome);
                navigate("/PaginaFeed");   
            }
        ).catch(
            function(error){
                console.log(error.response.data)
        })
    }
    return(
        <div className="cadastro">
            <div className="nav-superior">
                <img className="img" src={preto} name="logo"></img>
            </div>
            <div className="caixa">
                <h3 className="h3-3">Login</h3>
                <form className="inputs" onSubmit={handleSubmit(fazerLogin)}>
                    Email: <input className="email" type="email" {...register("email")}
                    ></input><br/>
                    Senha: <input className="senha" type="password" {...register("senha")}
                    ></input><br/>
                    <button className="enviar-1">Login
                    </button>
                </form>
                <div className="nav-inferior">
                    <NavLink className="conta-login" to="/PaginaFeed/PaginaCadastro">Não tenho conta</NavLink>
                </div>
            </div>
        </div>
    )
}