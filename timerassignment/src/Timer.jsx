import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second,setSecond] = useState(0)
    const [mintues,setMintues] = useState(0)
    let timer;
    
    useEffect(() =>{
    timer=setInterval(() =>{
    setSecond(second+1)

    if(second==50){
        setMintues(mintues+1)
        setSecond(0)
    }
    },1000)

    return()=>clearInterval(timer)
    });
    
    const restart=()=>{
        setSecond(0)
        setMintues(0)
    }
    const stop =()=>{
        clearInterval(timer)
    }

  return (
       <>
       <div className='show'>
           <div>
               <div>
                   <h2>timer</h2>
                   <h2>{mintues<10 ? "0"+mintues:mintues}:{second<10? "0"+second:second}</h2>
                </div>
               <button onClick={restart} style={{backgroundColor:"blue",color:'white', width: '150px',borderRadius:'10px',height:'50px',fontSize:"26px"}}>restart</button>
               <button onClick={stop} style={{backgroundColor:"blue",color:'white',width:'150px',borderRadius:'10px',height:'50px',fontSize:"26px",marginLeft:"20px"}}>stop</button>
           </div>
       </div>
       </>
  )
}

export default Timer