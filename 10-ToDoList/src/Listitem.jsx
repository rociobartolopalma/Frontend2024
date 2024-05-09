import React from "react"
import ShowItemModal from "./ShowItemModal"
import PropTypes from "prop-types"

const ListItem  =({task})=>{
    return(
    <>
    <div className="row m-2">
    <div className="col-6">
        <ShowItemModal task={task}/>
      <button className="btn btn-link"
      data-bs-toggle="modal"
      data-bs-target={"#showItemModal" +task.id}
      >{task.task}</button>
      </div>
<div className='col-3'>
{task.limit}
</div>
<div className='col'>
  {task.location}

  </div>
  </div>
  </>
    )
}

ListItem.PropTypes = {
  task: PropTypes.object.isRequired,
  taskList: PropTypes.array.isRequired,
  setTaskList:PropTypes.func.isRequired
}

export default ListItem