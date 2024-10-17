import { useEffect, useState } from "react"

function App() {

  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("RErander");
  

  useEffect(()=>{
    setTimeout(() => {
      setBankData({income:100})
    }, 3000);
  },[])

  useEffect(()=>{
    setTimeout(() => {
      setExchangeData({returns:100})
    }, 1000);
  },[])

  

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3 ;
  return (
    <div>
      hi {incomeTax}
    </div>
  )
}

export default App
