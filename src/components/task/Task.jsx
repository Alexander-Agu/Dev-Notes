import React from 'react'
import './task.css'

function Task() {
  let storageData = JSON.parse(localStorage.getItem('Dev Tasks'));
  console.log(storageData);

  function deleteBTN(){
    document.querySelector('.taskDataContainer').remove()
  };



  if(storageData){
    return storageData.map(x => {

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
          <button className='deleteBTN' onClick={deleteBTN} key={x.task}>
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