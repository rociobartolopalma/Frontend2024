//Hooks
import {useState} from 'react'

let contador = 1

function App() {
 const [contador, setContador] = useState(0)

 const handleBotonIncrementar = () => {
  setContador(contador + 1)
}

const handleBotonReiniciar = () => {
  setContador(0)
}

const handleBotonDecrementar = () => {
  setContador(contador - 1)
}

  return (
   <div>
    <h1>Contador</h1>
    <hr />
    <h2>{contador}</h2>
    <button onClick={handleBotonIncrementar}>Incrementar</button>
    <button onClick={handleBotonReiniciar}>Reiniciar</button>
    <button onClick={handleBotonDecrementar}>Decrementar</button>
   </div>
  )
}

export default App