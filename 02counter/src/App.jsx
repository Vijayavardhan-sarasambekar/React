import { useState } from 'react'
import './App.css'

function App() {

  const [counter,setcounter] = useState(15)


  const Addvalue = () =>{
    // counter = counter + 1
    // setcounter(counter+1)
    // console.log("Clicked",counter);
    counter<20 ? setcounter(counter+1) : setcounter(counter)
  }

  const Removevalue = () =>{
    // setcounter(counter-1);
    // console.log("Clicked",counter);
    counter>0 ? setcounter(counter-1) : setcounter(counter)

  }

  return (
    <>
      <h1>Vijayavardhan</h1>
      <h2>Counter</h2>

      <button onClick = {Addvalue}>Add Counter {counter}</button> 
      
      <br />

      <button
      onClick={Removevalue}>Remove Counter {counter}</button>
    </>
  )
}

export default App
