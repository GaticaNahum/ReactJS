import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludo from './components/Saludo';
import {useState} from "react";

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
      </header>
    </div>
  );
}

export default App;
