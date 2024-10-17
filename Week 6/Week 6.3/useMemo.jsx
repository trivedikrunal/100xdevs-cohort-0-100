import { useEffect, useMemo, useState } from "react"

function App() {

  const [exchangeData, setExchangeData] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("RErander");

 

  useEffect(() => {

    setExchangeData({ returns: 100 })
  },[]);
  useEffect(() => {

    setExchangeData2({ returns: 100 })
  },[]);
  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 })
    }, 3000);
  }, [])

  
  const carpoto = useMemo(()=>{ 
    console.log("RErander111111111111111111");
    
    return exchangeData.returns + exchangeData2.returns;
  
  },[exchangeData,exchangeData2])
  console.log("RErander222222222222222222");
  const incomeTax = (carpoto + bankData.income) * 0.3;
  return (
    <div>
      hi {incomeTax}
    </div>
  )
}

export default App
