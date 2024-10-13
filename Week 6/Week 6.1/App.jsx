import { useEffect } from "react"

function App() {

  useEffect(function(){
    alert("Hi")
  },[])

  return (
    <div >
      Hi there
    </div>
  )
}

export default App