import React from 'react'

 function UnControlled() {
     let inputVal = React.createRef();
     let submitHandler=(e)=>{
         alert(`input value is  ${inputVal.current.value}`)
         console.log(`input value is  ${inputVal.current.value}`);
         e.preventDefault();

     }
    return (
        <div>
           <form onSubmit={submitHandler} style={{width:"40%", alignItems:"center", marginInlineStart:'40px'}}>
               <input type="text" ref={inputVal} />
               <button type="submit">Submit</button>
               
            </form> 
        </div>
    )
}
export default UnControlled;