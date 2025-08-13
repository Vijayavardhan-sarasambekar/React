

// import './App.css'

// function App() {


//   return (
//     <>

//     </>
//   )
// }

// export default App

import React, { useCallback, useEffect, useRef ,useState } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  const [text,setText] = useState();

  const copyText = useCallback(()=>{
    inputRef.current?.select();
    // window.navigator.clipboard.writeText(text);
    window.navigator.clipboard.writeText(text);
  },[text])

  useEffect(() => {
    inputRef.current?.focus() // focus on mount
  }, []);
  return (
    <div>
      <input ref={inputRef} 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
      placeholder="Type here..." />
      
      <button onClick={copyText}>Focus again</button>
    </div>
  );
}

