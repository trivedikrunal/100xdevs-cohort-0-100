import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title:"Todo 1",
    dricriprion: "My New Task 1",
    complete: false 
  },{
    title:"Todo 2",
    dricriprion: "My New Task 2",
    complete: true 
  },{
    title:"Todo 3",
    dricriprion: "My New Task 3",
    complete: true 
  }]);

  function addTodo(){
    setTodos([...todos,{
      title: "Task more",
      dricriprion: "Task soon"
    }])

  }
  
  return (
    <div>
      <button onClick={addTodo}>Add Rendom Todo</button>
      {
        todos.map(function(todos){
          return <Todo title={todos.title} dricriprion={todos.dricriprion}/>
        })
      }
    </div>
  )
}
function Todo(prop){
 
  return <div>
    <h1>{prop.title}</h1>
    <h2>{prop.dricriprion}</h2>
  </div>

}

export default App
