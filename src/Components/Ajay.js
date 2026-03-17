import React from 'react'

function Ajay() {
  function add(a,b){
    let res=a+b;
    console.log(res);
  }
  return (
    <div>
        <h1>The total result is: {add(91,44)} deva Ajay Component</h1>
    </div>
  )
}

export default Ajay