import React from "react";
import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Raúl' edad={25} />
      <Saludo persona='Pedro' edad={27} />
      <Saludo persona='Pablo' edad={28} />
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario
        urlImagen='https://picsum.photos/58' 
        persona='Saúl'
        texto='Random text 1'
      />
      <Comentario
        urlImagen='https://picsum.photos/56' 
        persona='Enrico'
        texto='Random text 2'
      />
      <Comentario
        urlImagen='https://picsum.photos/57' 
        persona='Tomás'
        texto='Random text 3'
      />
    </div>
  );
}

export default App;
