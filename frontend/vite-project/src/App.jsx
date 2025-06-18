import { useState } from 'react'

import './App.css'
import axios from 'axios'
import { useEffect } from 'react'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Full-stack app!</h1>
      <p> jokes: {jokes.length} </p>
      {
        jokes.map((joke, _index) => {
          <div key = {joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.answer}</p>
          </div>
        })
      }
    </>
  )
}

export default App
