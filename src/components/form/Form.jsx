import React, { useState } from 'react'
import './form.css'

function Form() {
    const [form, setForm] = useState({firstName:'', lastName: ''})
  return (
    <section>
        <h1 className='logoName'>Dev-Notes</h1>

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
            </div>
        </div>
    </section>
  )
}

export default Form