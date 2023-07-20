/*
  In this file we are going to use the useEffect hook. and going to perform the same functionality.
   so what is useEffect hook is
*/

import React  ,{useState,useEffect} from 'react'
import './btn_style.css'

const UseEfffect = () => {
    const initialvalue=1;
// now to manage this state we are going to use the useState() hooks .
const[currval,setcurrval]= useState(initialvalue);
// now let see what happens when we use the useEffect hook.

  /* 1.  this is how it will work when the dependency is not included .
     in other words the useEffect will run at first render and also it will runs at each update.*/

// useEffect(
//   ()=>{
//        document.title=`react ${currval}`;
//        console.log("it will render each time "+{currval})
//   }
// )

/*
   now let see what it will happens if we include the dependency in the useEffect hooks.
   if we include the empty dependency then the useEffect will render only once.
*/
// useEffect(
//   ()=>{
//        document.title=`react ${currval}`
//        console.log("it will only render once")
//   },[]
// )

/*
  now let see what will happens if we include props and state in the useEffect hook.
*/
useEffect(
()=>{
   document.title=`react (${currval})`
   console.log(currval)
},[currval]
)

const increment=()=>{
    setcurrval((curr)=>curr+1);
}
const Decrement=()=>{
    setcurrval((curr)=>{
        if(curr>0){
       return curr-1
        }
        else{
            return curr=0;
        }
    });
}
  return (
    <>
      <div className="center_div">
        <p>{currval}</p>
        <div className="button2" onClick={()=>increment()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div className="button2" onClick={()=>Decrement()}>
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

export default UseEfffect
