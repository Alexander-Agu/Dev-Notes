import React, { useState } from 'react'
import Task from '../task/Task';
import './form.css'

function Form() {
    const [form, setForm] = useState({firstName:'', lastName: '', task: '', submitDate: ''});
    const currentDate = new Date().toDateString();
    let test = [{hg:78, ygh:67}]

    console.log(test + {jb:687, jghg:7})

    // Appends an object that contains the forms info
    function submitNote(){
        if(form.lastName !== '' && form.firstName !== '' && form.task !== '' && form.submitDate !== ''){
            localStorage.setItem('Dev Tasks', JSON.stringify( 
                {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    task: form.task,
                    currentDate: currentDate,
                    submitDate: form.submitDate
                }));
        } else{
            alert('Please fill in alll the boxes')
        };

        // Resets the input boxes
        setForm({firstName: '', lastName: '', task: '', submitDate: ''});
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