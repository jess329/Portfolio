import React from 'react'
import { useState } from 'react';

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const userInput = e.target.name
    setUser({...user, [userInput]: e.target.value})
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='section contact'>
    <form onSubmit={handleSubmit} className='form'>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        name='name'
        className='form-input'
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        name='email'
        className='form-input'
      />
      <textarea
        placeholder="Message"
        value={user.message}
        onChange={handleChange}
        className='textarea'
        name='message'
      ></textarea>
      <button type="submit" className='btn submit'>Submit</button>
    </form>
    </div>
  )
}

export default Contact