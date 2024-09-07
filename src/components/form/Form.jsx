import React, { useState } from 'react'
import './form.css'

function Form() {
    const [form, setForm] = useState({firstName:'', lastName: '', task: ''})
  return (
    <section>
        <div className="logo">
            <h1 className='logoName'>Dev-Notes</h1>
        </div>

        <div className="formContainer">
            <div className="form">
                <div className="personalInfo">
                    <div className="firstName">
                        <h2>Firstname</h2>
                        <input onChange={(e) => setForm({...form, firstName: e.target.value})} type="text" value={form.firstName} />
                    </div>

                    <div className="lastName">
                        <h2>Lastname</h2>
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
                        <input type="text" />
                    </div>

                    <div className="submitDate">
                        <h2>Submit Date:</h2>
                        <input type="text" placeholder='DD\MM\YYYY'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Form