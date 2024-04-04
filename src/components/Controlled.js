import React from 'react'
 const Controlled=() =>{
     const[myValue, setMyValue] = React.useState("")

     const inputHandler =(e)=>{
         setMyValue(e.target.value)
         console.log("Events on input",myValue);
     }
    return (
        <div >
            <form style={{width:"40%", alignItems:"center", marginInlineStart:'40px'}}>
            <input type="text" value={myValue} onChange={inputHandler}/>  
            </form>
          
        </div>
    )
}

export default Controlled