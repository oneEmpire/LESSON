import  React,  {useState} from  "react"


const  Add =  ()=>{
    const  [add,  setAdd] =  useStat(0)
    return(
      <div>
          <span>Getting going  click  vthe button  to  contnue</span>
        <button onClick = {()=>setAdd(add +1)}>Add</button>
      </div>
    )
}

export default  Add;