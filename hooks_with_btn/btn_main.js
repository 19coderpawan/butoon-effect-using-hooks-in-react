import React,{useState,useEffect} from 'react'
import './btn_style.css'

const  UseState= () => {
// now in this project i have to make the btn functionable i.e if click's on the inc then value should 
// increment and when click's on dec the value should decrement.

// and for that we are going to use the hooks in order to perform this functionality and to do that
// we have specials hooks which will helps us to manage the state.

// let's create state first in which we are going to store the intital value.
// const initialvalue=1;
// now to manage this state we are going to use the useState() hooks .
// const[currval,setcurrval]= useState(initialvalue);

// const increment=()=>{
//     setcurrval((curr)=>curr+1);
// }
// const Decrement=()=>{
//     setcurrval((curr)=>{
//         if(curr>0){
//        return curr-1
//         }
//         else{
//             return curr=0;
//         }
//     });
// }
let intital=0;
const [currstate,setcurrval]=useState(intital);

// useEffect(()=>{
//   alert("updated");
//   document.title=`react app ${currstate}`;
// },[currstate])



const  increment=()=>{
    setcurrval((curr)=>{
       return curr+1
});
}
const decrement=()=>{
  setcurrval((curr)=>{
    if(curr>0){
      return curr-1;
    }
    else{
      return curr=0;
    }
  })
}

  return (
    <>
      <div className="center_div">
        <p>{currstate}</p>
        <div className="button2" onClick={()=>increment()} >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        <div className="button2" onClick={()=>decrement()}>
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

export default UseState
