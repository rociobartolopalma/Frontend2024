import List from './List'
const tasklist=[
  {
    id:1,
    task:'Estudiar',
    limit:'15:00',
  },
  {
    id:2,
    task:'Practicar',
    limit:'17:00',
  },
  {
    id:3,
    task:'Dormir',
    limit:'22:00',
  },
]
function App() {

  return (   
    <div>
    <h1>To Do List</h1>
    <hr/>
    <List
     
    tasklist={tasklist}    
    />    
  </div>
  )
}

export default App