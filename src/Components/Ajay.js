import React from 'react'

function Ajay() {
  function add(a,b){
    let c=a+b;
    console.log(c);
  }
  return (
    <div>
        <h1>{add(91,44)}</h1>
    </div>
  )
}

export default Ajay