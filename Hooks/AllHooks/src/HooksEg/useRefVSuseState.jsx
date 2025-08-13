import { useState,useRef,useEffect } from "react";

export default function Example() {
    const countRef = useRef(0);
    const [count,setcount] = useState(0);

    function changeRef(){
        countRef.current = countRef.current+1;
        countRef.current?.select();
        countRef.current?.focus();
        window.navigator.clipboard.writeText(count);
    }

    function changeState(){
        setcount(count+1);
    }

    return(
        <>
            {/* <input  ref={countRef} value={count} placeholder="Enter number" onChange={(e)=>setcount(e.target.value)} /> */}
            <p>userRef:{countRef.current}</p>
            <p>State:{count}</p>
            <button onClick={changeRef}>Select</button>
            <button onClick={changeState}>State</button>
        </>
    )
}



// Storing previous and current value using useRef

// export default function Example({ value=200 }) {
//   const prevValue = useRef();

//   useEffect(() => {
//     prevValue.current = value;
//   }, [value]);

//   return <div>Prev: {prevValue.current}, Current: {value}</div>;
// }
