import { useState, useEffect } from "react";

function App() {

  const [selectId, setselectId] = useState(1);
  return (
    <div>
      <button onClick={function(){
        setselectId(1);

      }}>1</button>
      <button onClick={function(){
        setselectId(2);

      }}>2</button>
      <button onClick={function(){
        setselectId(3);

      }}>3</button>
      <Todo id={selectId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/todos/${id}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await res.json();
        setTodo(json.todo);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
      <h5>{todo.id}</h5>
    </div>
  );
}

export default App;
