import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0)
    return(
        <>
        <h1> Counter App</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+2)}>
            Incease
        </button>

        <button onClick={()=>setCount(count-2)}>
            Dearese
        </button>

        <button onClick={()=>setCount(0)}>
            Reset
        </button>
        </>
    )
}
export default Counter