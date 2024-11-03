import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
      
    
  );
}

function Count({setCount}){
  return <div>
    <CountRander />
    <Buttons setCount={setCount} />
  </div>

}

function CountRander(){
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount (count + 1);
    }}>Incrsing</button>
    <button onClick={()=>{
      setCount (count - 1);
    }}>Decrising</button>
  </div>

}
export default App;
