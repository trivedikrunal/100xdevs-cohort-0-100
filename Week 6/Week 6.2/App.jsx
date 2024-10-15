import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); //hook use useState

  return (
    <div>
      <button onClick={function(){
        setCount(count + 1)
      }}>Click Count {count}</button>
    </div>
  )
}

export default App
