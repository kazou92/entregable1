import { useState } from 'react'
import './App.css'
import Card from './component/Card'
import usuario from "./json/usuario.json"


// numero ramdom (Math.ramdom) genera un numero de 0 a 1 (no incluido el 1)
// math.sell redondea hacia arriba ex: 3,87 a 4
// math.round redondea hacia arriba si es mas (0.5) abajo menos(0.5)
// math.floor siempre redondea hacia abajo

const randomColor =["#C6EC5F","#BC2913","#D3791A"]

function App() {
 

  const random1 = arreglo => {
    return Math.floor(Math.random()*arreglo.length)

  }
   /*let usuarioAleatwa = random1(usuario)
   let colorAleatwa = random1(randomColor)*/

   const captarUnUsers = arr =>{
     const i = random1(arr)
     return arr[i]

   }

   const [usersAleatwa, setUsersAleatwa] = useState( captarUnUsers(usuario))
   const [coulorAleatwa, setCoulorAleatwa] = useState(captarUnUsers (randomColor))

   const clickButton = () =>{
     setUsersAleatwa(captarUnUsers(usuario))
     setCoulorAleatwa(captarUnUsers(randomColor))
   }
   
   const styleColor ={
     backgroundColor :coulorAleatwa
   }
  

  return (
    <div style={styleColor} className="App">
  <Card 
  usersAleatwa ={usersAleatwa} 
  coulorAleatwa = {coulorAleatwa}
  clickButton = {clickButton} />
     
    </div>
  )
}

export default App
