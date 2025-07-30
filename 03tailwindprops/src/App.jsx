
import './App.css'
import Card from './components/card'

let myObj = {
  name: "Vijayavardhan",
  age: 23,
  location: "India"
}

let myArr = [1,2,[4,5]];

function App() {

  return (
    <>
      <h1 className="bg-sky-600 rounded-md p-4 mb-3">TailWind Test</h1>
      <Card userName="chaiaurcode" myObj1={myObj} arr={myArr}/>        // Passing 'myObj', 'myArr' to card 
      <Card userName="vijayavardhan"/>
    </>
  )
}

export default App
