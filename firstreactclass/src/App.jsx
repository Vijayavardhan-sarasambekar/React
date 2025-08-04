import { useState } from 'react'
import './App.css'

function App() {
  const [Name, setName] = useState('vijay')
  const [Age, setAge] = useState(10)
  const [Age1, setAge1] = useState(100)

const changeName = () =>{

  const myarr = ['vijay','abcd','shiva','pavan','shree','shrishaila','jay','anil','modi','utilinet','Rahul']
  const random = Math.floor(Math.random()*myarr.length);
  console.log(random);
  

  setName(myarr[random])
  // setName(myarr[4])

}

const changeAge = () =>{
  const random = Math.floor(Math.random()*70+1) 
  console.log(random);

  setAge(random)
}

const changeAge2 = () =>{
  const random = Math.floor(Math.random()*1000+1) 
  // console.log(random);

  setAge1(random)
}
  return (
    <div>
      <h1>Name:{Name}</h1>
      <button type="button" onClick={changeName}>Change Name</button>

      <h1>Age:{Age}</h1>
      <button type="button" onClick={changeAge}>change Age</button>

      <h1>Age:{Age1}</h1>
      <button type="button" onClick={changeAge2}>change Age2</button>
    </div>
  )
}

export default App
