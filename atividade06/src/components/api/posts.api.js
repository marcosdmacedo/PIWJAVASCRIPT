import axios from "axios";
import { url_base } from "./constants.api";

export function ListarPosts(token){
    return axios({
        method: "GET",
        url: url_base+"posts",
        headers: {
            "token": token,
        },
    })
}
export function EnviarPosts(post){
    return axios({
        method: "POST",
        url: url_base+"posts",
        data: post,
    })
}