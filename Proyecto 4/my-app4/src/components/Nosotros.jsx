import React from 'react';
import { Link } from 'react-router-dom';

const Nosotros = () => {

  const [equipo, setEquipo] = React.useState([])
    /*{ id: 1, nombre: "Reactjs"},
    { id: 2, nombre: "Vuejs"},
    { id: 3, nombre: "Angularjs"},*/
  
  React.useEffect(() => {
    //console.log('useEffect')
    //setEquipo(datos)
    obtenerDatos()
  }, [])
  
  const obtenerDatos = async () => {
    const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/2')
    const users = await data.json()
    //console.log(users)
    setEquipo(users.civilizations)
  }

  return (
      <div>
        <h1>Nosotros</h1>
        <ul>
        {
          equipo.map(item => (
            <li key={item.id}>
              <Link to={`/nosotros/${item.id}`}>
                {item.name} - {item.expansion}
              </Link>
            </li>
            ))
          }
        </ul>
      </div>
  )
}

export default Nosotros