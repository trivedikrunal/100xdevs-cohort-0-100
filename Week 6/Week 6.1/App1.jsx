import React, {memo} from "react"
import { useState } from "react"

function App() {
  const[title,setTitle] = useState("My name is Krunal");

  function updateTitle(){
    setTitle("My name is " + Math.random())
  }

  return (
    <div>
    <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="Krunal2"></Header> 
    </div>
  )
}

const Header = React.memo(function ({title}){
  return <div>
    {title}
  </div>
})

export default App
