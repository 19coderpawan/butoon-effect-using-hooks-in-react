import React,{useState,useReducer,useEffect} from 'react'
import './btn_style.css'

const reducer=(State,action)=>{
    if(action.type==="INCR"){
        return State=State+1;
    }
    else if(action.type==="DEC"){
        if(State===0){
            alert("you can'nt decrement")
            return State=0;
        }
        else{
            return State-1;
        }
    }

}

const UseReducer= () => {
// let's create state first in which we are going to store the intital value.
const initialvalue=1;
// now to manage this state we are going to use the useState() hooks .
// const[currval,setcurrval]= useState(initialvalue);
const[State,dispatch]=useReducer(reducer,initialvalue);
useEffect(
    ()=>{
       document.title=`react(${State})`
    }
)



  return (
    <>
      <div className="center_div">
        <p>{State}</p>
        <div className="button2" onClick={()=>dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div className="button2" onClick={()=>dispatch({type:"DEC"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Decrement
        </div>
      </div>
    </>
  )
}

export default UseReducer
