import { useEffect, memo, useState, useCallback } from "react"

function App() {

  const [exchangeData, setExchangeData] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

 

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

  

  const calculatCripro = useCallback( function(){
    return exchangeData.returns + exchangeData2.returns;
  },[exchangeData,exchangeData2])

  return (
    <div>
      <CriptoGainReturn calculatCripro={calculatCripro}></CriptoGainReturn>
    </div>
  )
}


const CriptoGainReturn = memo( function({calculatCripro}){
  console.log("RE-Rander");

  return <div>
    Your cipto {calculatCripro()}
  </div>

});
export default App
