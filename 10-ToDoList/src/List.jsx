import ListItem from "./ListItem"
import PropTypes from "prop-types"

const List=({taskList})=>{

return (  
    <>   
    <div className="row">
      <div className="col-6">
        <h4> Tasks</h4>
      </div>
      <div className="col-3">
        <h4>Limit </h4>
      </div>
      <div className="col">
        <h4>Location</h4>
      </div>
    </div>
    {
        taskList.map((task)=>(
           
                <ListItem
                key={task.id}
                task={task}
                />          
        )
    )
    }
    </>
  )
}

List.PropTypes = {
  task: PropTypes.object.isRequired,
  taskList: PropTypes.array.isRequired,
  setTaskList:PropTypes.func.isRequired
}


export default List