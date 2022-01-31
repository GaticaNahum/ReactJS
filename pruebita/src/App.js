import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludo from './components/Saludo';
import {useState, useEffect} from "react";

function App() {
  const nombre =  "Perron";
  const user = {
    nom:"Nahum",
    edad:27,
    color: "Azul",
    direccion: {
      calle: "Mariano matamoros",
      municipio : "Temixco"
    }
  };

  const presionar3 = ()=>{
    alert("Que onda que pedo desde app.js");
  }

  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Contar tuvo un cambio a " + contar); //Dime que quieres que haga si hay un cambio
  
  }, [contar]); //Checamos si hay un cambio
  
  //El state sirve par cambar un elemento
  //El useEffect sirve para detetar el cambio de un elemento
  const encenderApagar = () => {
    setContar(contar + 1 );
    //setStateCar(!stateCar); Todo esto tiene que ver con la importación de useStatus para poder cambiar el estado de algo
    setStateCar(preValue => !preValue)
  }
  
  //hook yseEffect


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Hola Erick</code> and save to reload.
        </p>
        <h1>Hola</h1>
        <HolaMundo/>
        <AdiosMundo/>
        <h2>------------------</h2>
        <Saludo userInfo = {user} funcionPress = {presionar3}/>
        <hr></hr>
        <h3>El coche esta: {stateCar ?"Encendido" : "Apagado"}</h3>
        <h4>Clicks: {contar}</h4> 
        <button onClick={encenderApagar}>Encendido/Apagado</button>     
      </header>
    </div>
  );
}

export default App;
