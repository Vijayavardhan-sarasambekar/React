import {useState} from "react"

function App() {
const [color,setColor] = useState('black');

  return (
      <div className="w-full h-screen duration-100" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-full m-1 px-3 py-2 bg-white text-white shadow-lg">
            <button onClick={()=>setColor('red')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"green"}}>green</button>
            <button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor('orange')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor('purple')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"purple"}}>purple</button>
            
            <button onClick={()=>setColor('grey')} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor:"grey"}}>Grey</button>

            <button onClick={()=>setColor('yellow')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={()=>setColor('Lavender')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"Lavender"}}>Lavender</button>

            <button onClick={()=>setColor('Gold')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"Gold"}}>Gold</button>

            <button onClick={()=>setColor('BlueViolet')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"BlueViolet"}}>BlueViolet</button>

            <button onClick={()=>setColor('DarkCyan')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"DarkCyan"}}>DarkCyan</button>

            <button onClick={()=>setColor('Wheat')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"Wheat"}}>Wheat</button>

            <button onClick={()=>setColor('Brown')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"Brown"}}>Brown</button>

            <button onClick={()=>setColor('RoyalBlue')} className="outline-none px-4 py-1 text-black rounded-full shadow-lg" style={{backgroundColor:"RoyalBlue"}}>RoyalBlue</button>
            
          </div>
        
        </div>
      </div>
  )
}

export default App
