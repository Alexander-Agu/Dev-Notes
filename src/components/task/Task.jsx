import React from 'react'
import './task.css'

let taskBasket = JSON.parse(localStorage.getItem('Dev Tasks'));
function Task() {
  function deleteBTN(taskID){
    for(let i = 0; i < taskBasket.length; i++){
      if(taskBasket[i].task === taskID){
        taskBasket.splice(i, 1);
      }
    };
    
    localStorage.setItem('Dev Tasks', JSON.stringify(taskBasket));
  };

  if(taskBasket){
    return taskBasket.map(x => {

      return <section className="taskDataContainer" key={x.task}>
        <div className='details'>
          <div className="names">
            <h2>{x.firstName} {x.lastName}</h2>
          </div>

          <h1 className='task'>{x.task}</h1>

          <div className="dates">
            <h2>11 Sep 2002 TO {x.submitDate}</h2>
          </div>
        </div>

        <div className="xButton">
          <button className='deleteBTN' onClick={() => deleteBTN(x.task)} key={x.task}>
          
            <span className="material-symbols-outlined">
              delete_sweep
            </span>
          </button>
        </div>
      </section>
    })
  }

}

export default Task