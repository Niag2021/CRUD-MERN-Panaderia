import logo from './logo.svg';
import './App.css';
//Importamos los componentes.
import CompShowTrabajadores from './trabajadores/ShowTrabajadores.js'; 
import CompCreateTrabajador from './trabajadores/CreateTrabajador.js'; 
import CompEditTrabajador from './trabajadores/EditTrabajador.js'; 
//Importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route>
          <Route path='/' element={<CompShowTrabajadores/>} />
          <Route path='/create' element={<CompCreateTrabajador/>} />
          <Route path='/edit/:id' element={<CompEditTrabajador/>} />
          </Route>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
