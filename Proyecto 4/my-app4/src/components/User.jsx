import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const User = () => {

    //console.log(useParams());
    const { id } = useParams()
    console.log(id)

    const [pueblo, setPueblo] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/2${id}`)
            const users = await data.json()
            setPueblo(users)
    }
    obtenerDatos()
}, [])
    
  return (
        <div>
          <h3>{pueblo.name}</h3>
          <p>{pueblo.team_bonus}</p>
        </div>
  )
}

export default User