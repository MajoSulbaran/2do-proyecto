import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';


function App() {

  const [linea1, setLinea1] = useState ('');
  const [linea2, setLinea2] = useState ('');
  const [imagen, setImagen] = useState ('');

  const onChangeLinea1 = (evento) => {

    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = (evento) => {

    setLinea2(evento.target.value)
  }  
  
  const onChangeImagen = (evento) => {

    setImagen(evento.target.value)
  }

  const onClickExportar = (evento) => {
   

    html2canvas(document.querySelector("#destino")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'destino.png';
      link.href = img;
      link.click();
    });
  
}

 
  return (
    <div className="App">

      <select onChange={onChangeImagen}>
        <option value="calle-grecia">calle grecia</option>
        <option value="navidad-europa">navida europa</option>
        <option value="lugares-más-hermosos-de-Europa">lugares hermoso</option>
        <option value="vistas-hermosa">vista hermosa</option>
        <option value="paya">playa</option>
        <option value="ciudades-para-visitar-en-europa">ciudades para visitar</option>
      </select> <br />

        <input onChange={onChangeLinea1} type="text" placeholder= "Linea 1" /> <br />
        <input  onChange={onChangeLinea2}type="text" placeholder= "Linea 2" /> <br />
        <button onClick={onClickExportar}>Exportar</button> 

        <div className="destino" id="destino">
        <span>{linea1}</span> <br />
        <span>{linea2}</span> 
        <img src={"/img/" + imagen + ".jpg"} />
      </div>

    </div>
  );
}

export default App;
