import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import Venkatesh from "./Components/Venkatesh"
import Ajay from "./Components/Ajay"
import ChildComponent from "./Components/ChildComponent"
function App() {
  let [data,setData]=useState([])
  let [count,setCount]=useState(100)
  debugger
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      return setData(data)
    })
  },[])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={() => setCount(count+100)}>Click Me</button>
      <ChildComponent/>
      <Venkatesh/>
      <Ajay/>
    </div>
  );
}

export default App;
