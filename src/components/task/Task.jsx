import React from 'react'
import './task.css'

function Task() {
  function deleteBTN(){
    document.querySelector('.taskDataContainer').remove()
  }
  return (
    <section className="taskDataContainer">
      <div className='details'>
        <div className="names">
          <h2>Alexander Agu</h2>
        </div>

        <h1 className='task'>Center a Div</h1>

        <div className="dates">
          <h2>11 Sep 2002 TO 12 Sep 2022</h2>
        </div>
      </div>

      <div className="xButton">
        <button className='deleteBTN' onClick={deleteBTN}>
          <span class="material-symbols-outlined">
            delete_sweep
          </span>
        </button>
      </div>
    </section>
  )
}

export default Task