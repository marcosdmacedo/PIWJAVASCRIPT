import './App.css';
import { PaginaFeed } from './components/Pages/PaginaFeed/PaginaFeed';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaPostar } from './components/Pages/Postar/PaginaPostar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PaginaFeed></PaginaFeed>}>
          </Route>
          <Route path="/PaginaFeed" element={<PaginaFeed></PaginaFeed>}>
          </Route>
          <Route path='/PaginaPostar' element={<PaginaPostar></PaginaPostar>}>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
