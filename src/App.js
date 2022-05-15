import './App.css';
import Boton from './componentes/Boton';
import avisitemaLogo from "../src/imagenes/logo-avsistema.png";
import Contador from './componentes/Contador';
import { useState } from "react";



function App() {

  const [ numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='Avsistema-logo-contenedor'>
        <img className='Avsistema-logo' 
        src={avisitemaLogo}
        alt='Logo de avsistema'/>
      </div>
      <div className='contenedor-principal'>
       <Contador numClics={numClics}/>
        <Boton 
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic} />
        
        <Boton 
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
