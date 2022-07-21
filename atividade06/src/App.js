import './App.css';
import { PaginaFeed } from './components/Pages/PaginaFeed/PaginaFeed';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PaginaPostar } from './components/Pages/Postar/PaginaPostar';
import { PaginaCadastro } from './components/Pages/Cadastro/PaginaCadastro';
import { PaginaLogin } from './components/Pages/Login/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function App() {

  let [auth, setAuth] = useState({token: null, nome: null});

  if(auth.token == null){
    auth.token = localStorage.getItem("token");
    auth.nome = localStorage.getItem("nome");
  }

  let armazenarAuth = (token, nome) => {
    setAuth({token:token, nome:nome});
    localStorage.setItem("token", token);
    localStorage.setItem("nome", nome);
  }
 
  return (
    <AuthContext.Provider value={{auth: auth, setAuth: armazenarAuth}}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            {
              auth.token==null? <Route path='/' element={<Navigate to="/PaginaFeed/PaginaLogin"></Navigate>}></Route> :
              <Route path='/' element={<Navigate to="/PaginaFeed"></Navigate>}></Route> 
            }
            <Route path='/PaginaFeed/PaginaCadastro' element={<PaginaCadastro></PaginaCadastro>}>
            </Route>
            <Route path='/PaginaFeed/PaginaLogin' element={<PaginaLogin></PaginaLogin>}>
            </Route>
            <Route path="/PaginaFeed" element={<PaginaFeed></PaginaFeed>}>
            </Route>
            <Route path='/PaginaPostar' element={<PaginaPostar></PaginaPostar>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
