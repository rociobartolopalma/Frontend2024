import ListItem from "./ListItem"

const personas = [
  {
    nombre: 'Rocio',
    direccion: 'Tuxtepec, Oax',
    telefono: '2871095900',
    correo: 'rociobart@gmail.com'
  },
  {
    nombre: 'Jazmin',
    direccion: 'Tuxtepec, Oax',
    telefono: '2875463153',
    correo: 'jazminpal@gmail.com'
  },
  {
    nombre: 'Reyna',
    direccion: 'Tuxtepec, Oax',
    telefono: '2871119293',
    correo: 'reyna03@gmail.com'
  }
]

function App() {

  return (
    <div>
      <h1>Agenda</h1>
      <hr />
      <ul>
        {
          personas.map((persona) => (
           <ListItem
           key={persona.correo}
           nombre={persona.nombre}
           direccion={persona.direccion}
           telefono={persona.telefono}
           correo={persona.correo}
           />
         
          ))
        }
      </ul>
    </div>
    
  )
}

export default App