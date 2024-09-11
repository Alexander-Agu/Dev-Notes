import React, { useState } from 'react'
import Task from '../task/Task';
import './form.css'

function Form() {
    const [form, setForm] = useState({firstName:'', lastName: '', task: '', submitDate: ''});
    const currentDate = new Date().toDateString();

    let tasksData = JSON.parse(localStorage.getItem('Dev Tasks')) || [];

    // Saves the form data into local storage
    // Should erase the form data once saved into local storage
    function submitNote(){
        if(form.firstName !== '' && form.lastName !== '' && form.task !== '' && form.submitDate !== ''){
            tasksData.push({
                firstName: form.firstName,
                lastName: form.lastName,
                task: form.task,
                submitDate: form.submitDate
            })

        } else{
            alert('Please fill in all the boxes')
        }

        // Resets the form
        setForm({
            firstName: '',
            lastName: '',
            task: '',
            submitDate: ''
        })

        // Save form data to local storage
        localStorage.setItem('Dev Tasks', JSON.stringify(tasksData));
        window.location.reload(true);
    }

  return (
    <section>
        <div className="logo">
            <h1 className='logoName'>Dev-Notes</h1>
        </div>

        <div className="formContainer">
            <div className="form">
                <div className="personalInfo">
                    <div className="firstName">
                        <h2>Firstname:</h2>
                        <input onChange={(e) => setForm({...form, firstName: e.target.value})} type="text" value={form.firstName} />
                    </div>

                    <div className="lastName">
                        <h2>Lastname:</h2>
                        <input onChange={(e) => setForm({...form, lastName: e.target.value})} type="text" value={form.lastName} />
                    </div>
                </div>
                
                <div className="taskContainer">
                    <h2>Task?</h2>
                    <input className='taskInput' onChange={(e) => setForm({...form, task: e.target.value})} type="text" value={form.task}/>
                </div>

                <div className="datesContainer">
                    <div className="todayDate">
                        <h2>Today's Date:</h2>
                        <p>{currentDate}</p>
                    </div>

                    <div className="submitDate">
                        <h2>Submit Date:</h2>
                        <input onChange={(e) => setForm({...form, submitDate: e.target.value})} type="text" value={form.submitDate} placeholder='DD\MM\YYYY'/>
                    </div>
                </div>
            </div>

            <button onClick={submitNote} className='submitBTN'>
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        </div>
    </section>
  )
}

export default Form