import { useEffect, useContext, useState } from "react";
import { ListarPosts } from "../../api/posts.api";
import Navegador from "../../Commom/Navegador/Navegador";
import './PaginaFeed.css';
import { AuthContext } from "../../../App";
// import { Footer } from "../Footer/Footer";

export function PaginaFeed(){
    return(
        <div>
            <Navegador></Navegador> 
            <Conteudo></Conteudo>
        </div>
    )
}

function CardPost({nome, texto, likes, id}){

    let classes = ["card"];
    let class_name = classes.join(" ");
    return(
        <div className={class_name}>
            <div className="cards">
                <p className="nome_usuario">id: {id}</p>
                <h2 className="nome_usuario">{nome}</h2> <br/>
                <p className="p">" {texto} "</p><br/>
                <div className="inferior_card">
                    <p className="qnt_likes">{likes} likes</p>
                    <button className="like"> Like </button>
                </div>

                <div className="comentarios">
                    <input className="comentar" type="text"></input>
                    <input className="enviar-3" type="submit"></input>
                </div>
            </div>
        </div>
    )
}

function Conteudo(){
    
    let [posts, setPosts] = useState([]); 

    let {auth} = useContext(AuthContext);

    useEffect(()=>{
        ListarPosts(auth.token).then(
            function(response){
                console.log(posts);
                setPosts(response.data);
            }
        )
    }, []);
   
    let cards = [];
    console.log(posts);
    for(let post of posts){
        cards.push(<CardPost
                        nome={post.nome} 
                        texto={post.texto}
                        likes={post.likes}
                        id={post.id}>
                    </CardPost>)
    }
    return (
        <div className="pagina">
            <div className="galeria-posts">
                {cards}
            </div>
        </div> 
    )

}