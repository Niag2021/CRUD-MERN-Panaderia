import logo from './logo.svg';
import './App.css';
//Importamos los componentes.
import CompShowTrabajadores from './trabajadores/ShowTrabajadores';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowTrabajadores/>
    </div>
  );
}

export default App;
