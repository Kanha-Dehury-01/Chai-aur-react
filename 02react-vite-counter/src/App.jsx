import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // let number = 0;
  let increaseCount = () => {
    // console.log(count);
    if(count+1 > 20){
      alert("You can't increase further. Maximum!!! ")
    }
    else{
      setCount(count+1)
    }
  }
  let decreaseCount = () => {
    // console.log(count);
    if(count-1 < 0){
      let num =prompt("You can't decrease further. Minimum!!! " );
      if(num>0 && num <=20) setCount(num);
    }
    else{
      setCount(count-1)
    }
  }



  return (
    <>
      <h1>Number Counter</h1>
      <p>Number is : {count}</p>
      <button onClick={increaseCount}>Click to Increase</button>
      <br />
      <button onClick={decreaseCount}>Click to Decrease</button>
      <footer>Number is : {count}</footer>
    </>
  )
}

export default App
