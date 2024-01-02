import React,{useRef} from 'react'

export default function Usememo() {
   let inputRef=useRef(null)
   function handleInput() {
    console.warn("Function call")
    //inputRef.current.value="1000"
    //inputRef.current.focus()
    inputRef.current.style.display="none"
   }
  return (
    <div>
        <h1>useRef in React</h1>
        <input type='text' ref={inputRef}/>
        <button onClick={handleInput}>Handle Input</button>    
    </div>
  )
}
