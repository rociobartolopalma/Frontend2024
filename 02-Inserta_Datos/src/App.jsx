import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const persona = {
  nombre: 'Rocio Bartolo Palma',
  edad: 21,
  fecha_nacimiento: '20/03/2002',
  lugar_nacimiento: 'Tuxtepec, Oax',
  signo: 'Piscis',
  pasatiempos: [
  'Escuchar musica', 
  'Leer', 
  'Ver series'  
  ],
}
function App() {
  return (
    <div>
      <h1>Información Personal</h1>
      <hr />
      <ul>
        <li>Nombre Completo: {persona.nombre}</li>
        <li>Edad: {persona.edad}</li>
        <li>Fecha de nacimiento: {persona.fecha_nacimiento}</li>
        <li>Lugar de nacimiento: {persona.lugar_nacimiento}</li>
        <li>Signo Zodiacal: {persona.signo}</li>
        <li>Pasatiempos: 
          <ul>
              {
              persona.pasatiempos.map((pasatiempos) => {
          return <li key={pasatiempos}>{pasatiempos}</li>
          })
          }
          
        </ul>
        </li>
        </ul>
      </div>  
  )
}

export default App