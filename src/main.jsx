import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/form/Form'
import Task from './components/task/Task'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    <Task />
  </React.StrictMode>,
)
