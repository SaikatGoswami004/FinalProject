import React from 'react'
import { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {

  const [display,setDisplay]=useState([]);
 
 const[out,setOut]=useState();

const btnclick=(value)=>{
setDisplay([...display,value])
// console.log(display);

}
// const btnOperator=(value)=>{
//   setOperator([...operator,value])
//   console.log(operator);
// }
const btnAC=()=>{
  setDisplay(" ")
}
const btnDEL=()=>{
  const del=display.slice(0,-1);
  // console.log(del);
  setDisplay(del)
}

const equalto=()=>{
const result=display.map((item,i)=>{
  let a="";
  if(item==="*"){
    let left=Number(display.slice(0,i));
    let right=Number(display.slice(i+1,display.length));
    return a=left*right;
  }  
  else if(item==="/"){
    let left=Number(display.slice(0,i));
    let right=Number(display.slice(i+1,display.length));
    return a=left/right
  }  
  else if(item==="+"){
    let left=Number(display.slice(0,i));
    let right=Number(display.slice(i+1,display.length));
    return a=left+right
  }
  else if(item==="-"){
    let left=Number(display.slice(0,i));
    let right=Number(display.slice(i+1,display.length));
    return a=left-right
  }
  else if(item==="%"){
    let left=Number(display.slice(0,i));
    let right=Number(display.slice(i+1,display.length));
    return a=left%right
  }
  return a
}).join(" ")
console.log(result);
setOut(result)

}



  return (
    <div className='clc-main'>
    
        <div className="clc-body">
          <div className="clc-disply">
            <div className="clc-input-disply">
              <p>{display}</p>
            </div>
            <div className="clc-output-disply">
              <span>=</span><p>{out}</p>
            </div>
          </div>
          
            <div className="clc-button-row">
              <button onClick={btnAC} className='clc-button'>AC</button>
              <button onClick={btnDEL} className='clc-button'>DEL</button>
              <button onClick={()=>btnclick("%")} className='clc-button'>%</button>
              <button onClick={()=>btnclick("/")} className='clc-button'>/</button>
            </div>
            <div className="clc-button-row">
              <button onClick={()=>btnclick(7)} className='clc-button'>7</button>
              <button onClick={()=>btnclick(8)} className='clc-button'>8</button>
              <button onClick={()=>btnclick(9)} className='clc-button'>9</button>
              <button onClick={()=>btnclick("*")} className='clc-button'>*</button>
            </div>
            <div className="clc-button-row">
              <button onClick={()=>btnclick(4)} className='clc-button'>4</button>
              <button onClick={()=>btnclick(5)} className='clc-button'>5</button>
              <button onClick={()=>btnclick(6)} className='clc-button'>6</button>
              <button onClick={()=>btnclick("-")} className='clc-button'>-</button>
            </div>
            <div className="clc-button-row">
              <button onClick={()=>btnclick(1)} className='clc-button'>1</button>
              <button onClick={()=>btnclick(2)} className='clc-button'>2</button>
              <button onClick={()=>btnclick(3)} className='clc-button'>3</button>
              <button onClick={()=>btnclick("-")} className='clc-button'>+</button>
            </div>
            <div className="clc-button-row">
              <button onClick={()=>btnclick(0)} className='button-0'>0</button>
              <button onClick={()=>btnclick(".")} className='clc-button'>.</button>
              <button onClick={equalto} className='clc-button'>=</button>
              
            </div>
          </div>
        </div>
      
    
  )
}

export default Calculator