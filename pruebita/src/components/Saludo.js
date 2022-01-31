import React from "react";

function Saludo(props){
    console.log(props);
    console.log(props.userInfo.nom);
    console.log(props.userInfo.edad);
    console.log(props.userInfo.color);

      const presionar = ()=>{
    alert("Que onda que pedo");
  }

  const {userInfo} = props;
  console.log(userInfo);
  const {edad, nom, color, direccion} = userInfo;
  console.log(`Hola ${nom}, mucho gusto se que tu color favorito es el ${color} `);
  
    return(
        <div>
            <h1>Que onda que pez, Hola {props.userInfo.nom} tienes {props.userInfo.edad}</h1>
            <h2> y te gusta el color {props.userInfo.color}</h2>
            <h2> y te gusta el color {props.userInfo.direccion.calle} en {props.userInfo.direccion.municipio}</h2>
            <button title="Da click" onClick={()=>alert("holiwis")}>Presioname</button>
            <button title="Da click" onClick={presionar}>Presioname 2</button>
            <button title="Da click" onClick={props.funcionPress}>Presioname 3</button>
            <hr/>
            <h1> Esta es una forma distinta de hacerlo</h1>
            <h2> Hola {nom} tienes {edad} y tu color favorito es {color} y vives en {direccion.calle}</h2>

        </div>
    )
}


export default Saludo;