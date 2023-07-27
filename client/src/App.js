//Importamos los componentes.
import CompShowTrabajadores from './trabajadores/ShowTrabajadores';
import CompCreateTrabajadores from './trabajadores/createTrabajadores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowTrabajadores/>} />
          <Route path='/create' element={<CompCreateTrabajadores/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
