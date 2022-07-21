import axios from "axios";
import { url_base } from "./constants.api";

export function criarCadastro(usuario){
    return axios({
        method: "POST",
        url: url_base+"usuarios",
        data: usuario,
    })
}
// export function getUsuarios(token){
//     return axios({
//         method:"GET",
//         url: url_base + "usuarios",
//         headers:{
//             token: token
//         }
//     })
// }
export function login(login_data){
    return axios({
        method: "POST",
        url: url_base+"usuarios/signin",
        data: login_data,
    })
} 
