// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
  

//   return (
//     <div>
//       <CustomButton count = {count} setCount = {setCount} ></CustomButton>
//       <CustomButton count = {count + 1} setCount = {setCount} ></CustomButton>
//       <CustomButton count = {count - 1} setCount = {setCount} ></CustomButton>
//       <CustomButton count = {count * 2} setCount = {setCount} ></CustomButton>

//     </div>
//   )
// }
// function CustomButton(prop){
//   function myFunction(){
//     prop.setCount(prop.count + 1)
//   }
//   return <button onClick={myFunction}>
//     Counter {prop.count}
//   </button>

// }

// export default App
import React from 'react'

function App() {

  return (
    <div>
      <Button></Button>
    </div>
  )
}

function Button(props) {
  const [count, setCount] = React.useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${count}`
  );
}

export default App