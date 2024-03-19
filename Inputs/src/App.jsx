import {useState} from "react"

function App() {
  const [username, setUsername] = useState("")

  const handUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handSubmint = (e) => {
    e.preventDefault()
    console.log("Mi nombre de usuario es", username)
    setUsername("")
  }

  return (
    <div>
      <h1>Inputs</h1>
      <hr />
      <form onSubmit={(e) => handSubmint(e)}>
        <div>
          <label htmlfor="username">Username</label>
          <input 
          id="username" 
          type="text"
          value={username}
          onChange={(event) => handUsernameChange(event)}
          />
          </div>
          <div>
            <label htmlfor="password">Password</label>
            <input id="password" type="password" />
            </div>
            <div>
              <button type="submit">Submint</button>
              </div>
      </form>
    </div>
  )
}

export default App