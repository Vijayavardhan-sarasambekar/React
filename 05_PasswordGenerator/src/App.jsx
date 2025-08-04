import { useState, useCallback, useEffect } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [Allownumber,setAllownumber] = useState(false);
  const [Allowcharactor,setAllowcharactor] = useState(false);
  const [password,setpassword] = useState();


  const passwordgenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (Allowcharactor) str = str + "!~@#$%^&*()_{}`";
    if (Allownumber) str = str + "0123456789";

    for (let i = 1; i <= length; i++) {
      const random = Math.floor(Math.random()*str.length +1);
      pass = pass + str.charAt(random);
    }

    setpassword(pass)

  },[Allowcharactor,Allownumber,length,setpassword])

  useEffect(()=>{
    passwordgenerator()
  },[length,Allownumber,Allowcharactor,passwordgenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-3 py-8 text-red-500 bg-gray-900'>
          <h1 className='text-white text-center mb-3'>Generate password</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input type="text" 
            className='outline-none w-full py-1 px-3'
            value={password}
            placeholder='Enter password'
            readOnly />
            <button className='outline-none text-white bg-blue-600 px-3 py-0.5 shrink-0'>Copy</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-centergap-x-1'>
              <input type="range" 
              className='cursor-pointer' 
              min={6} max={100} 
              value={length}
              onChange={(e)=>{setlength(e.target.value)}} />
              <label htmlFor="">Length {length}</label>
            </div>

            <div className='flex items-centergap-x-1'>
              <input type="checkbox"
              defaultChecked = {Allowcharactor}
              id='charInput'
              onChange={()=>{setAllowcharactor((prev)=>!prev)}}
              />
              <label htmlFor="charInput">Charactor</label>
            </div>

            <div className='flex items-centergap-x-1'>
              <input type="checkbox"
              defaultChecked = {Allownumber}
              id='numInput'
              onChange={()=>{setAllownumber((prev)=>!prev)}}
              />
              <label htmlFor="numInput">number</label>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default App