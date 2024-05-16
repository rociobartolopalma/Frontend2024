import CityCard from './components/CityCard'
import './assets/css/index.css'

const App = () => {

return(
    <div className='container'>
      <h1>Weather Api</h1>
      <hr />
      {  
        <CityCard />
      }   
      </div>
  )
}

export default App 