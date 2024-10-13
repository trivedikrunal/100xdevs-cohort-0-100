import React, {memo} from "react"
import { useState } from "react"


let counter = 4;
function App() {

  const [todos, setTodo] = useState([{
    id: 1,
    title: "Go to Gym",
    decription: "Go to Gym Todo"
  }, {
    id: 2,
    title: "Go to Home",
    decription: "Go to Home Todo"
  }, {
    id: 3,
    title: "Go to School",
    decription: "Go to School Todo"
  }])

  function addTodo(){
    setTodo([...todos,{
      id: counter++,
      title: Math.random(),
      decription: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add A Todo</button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} decription={todo.decription} />)}
    
    </div>
  )
}

function Todo({title,decription}){

  return <div>
    <h1>{title}</h1>
    <h5>{decription}</h5>
    <hr />
  </div>
}
export default App
