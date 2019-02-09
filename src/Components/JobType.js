import React, { Component }  from 'react';

class JobType extends Component { 
  
    constructor()
        {
            super();
            this.state = {
            
            }            
        }
render()
{
    const Tasks= this.state.Tasks.map((task,i)=>{
        return(
            <div className = "col-md-4">
            <div className="card mt-4">
            <div className="card-header">
            <h3>{task.title}</h3>
            <span className="badge badge-pill bange-danger ml-2"></span>
            {task.priority}
            </div>
            <div className ="card-body">
            <p>{task.description}</p>
            <p><mark> {task.responsable}</mark></p>
            </div>
            </div>
            </div> 
      ) 
    })
    /*const lenghOfTasks = Tasks.length*/
    return(
        <div className="container"> 
        <div className ="row mt-4">
        {Tasks}
        </div>
        </div>
    )
    }
}

export default JobType;