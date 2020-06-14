import React, { useContext, useState } from 'react';
import { Context } from './Context/context.js';

export default function Home() {

  const { schools, addSchool } = useContext(Context);
  const [ inputData, setInputData ] = useState({
    school_name: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchool(inputData.school_name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>  
        <input name='school_name' onChange={handleChange} value={inputData.school} />
        <br />
        <button>Add to list</button>
      </form>
      <div>
        <br />
        <h3>List of Schools I'm Interested In</h3>
        <ul>
          {schools.map(school => <li>{school}</li>)}
        </ul>
      </div>
    </>
  )
}