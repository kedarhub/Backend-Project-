import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setjokes] = useState([])
  useEffect(()=>{
    axios.get('api/joke')
    .then((response)=>{
      setjokes(response.data)
      console.log( response.data,'api is working fine')
    })
    .catch((error)=>{
      console.log(error)
    })
  },[jokes])
  return (
    <>
      
        <h1> Hello kedar Singh</h1>
      <p>JOKES: {jokes.length} </p>
      {
        jokes.map((joke,index)=>(
          // <div key = >
            <h3> {joke.id}, {joke.title} ,{joke.content}</h3>
            // <p></p>
          // </div>
        ))
      }
    </>
  )
}

export default App
