import { NavLink } from "react-router-dom";
import Navegador from "../../Commom/Navegador/Navegador";
import './PaginaFeed.css';
import { Footer } from "../Footer/Footer";
// Para o Botão "Linha do Tempo" ficar pressionado
// é preciso clicar nele.

function CardPost({nome, texto, qtLikes, disponivel}){
    let classes = ["cards"];
    // if(disponivel===false){
    //     classes.push("indisponivel"); // teste da aula, não utilizado nesse código
    // }
    let class_name = classes.join(" ");

    return(
        <div className={class_name}>
            {/* Posso chamar um objeto dentro do HTML */}
            <h2 className="nome_usuario">{nome}</h2> <br/>
            <p className="p">" {texto} "</p><br/>
                <div className="inferior_card">
                    <p className="qnt_likes">{qtLikes} Likes</p>
                    <button className="like"> Like </button>
                </div>
                <div className="comentarios">
                    <input className="comentar" type="text" value="" placeholder="Comentar"></input>
                    <input className="enviar" type="submit"></input>
                </div>
            </div>
    )
}
export function PaginaFeed(){
    // InfPosts é os dados que viram do banco
    let InfPosts = [
        {
            id:"01",
            nome:"Marcos",
            texto:"Hoje é dia de Feijoada !!!",
            qtLikes:"6"
        },
        {
            id:"02",
            nome:"Victor",
            texto:"Aí sim em !!!",
            qtLikes:"4"
        },
    ]
    let cards = [];

    for(let InfPost of InfPosts){
        cards.push(<CardPost
                    id={InfPost.id} 
                    nome={InfPost.nome}
                    texto={InfPost.texto}
                    qtLikes={InfPost.qtLikes}
                    ></CardPost>)
    }
    
    return(
        <div className="pagina">
            <Navegador></Navegador>  
            <div className="galeria-posts">
                {cards}
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export function BotaoComentario(){
    return(
        <div>
            <input className="caixa" type="text"></input>
            <NavLink className="enviar_buttom"></NavLink>
        </div>
    )
}