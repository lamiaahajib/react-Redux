import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CRIMENT, INCRIMENT, INC_BY_VALUE } from '../Action/Type';

export default function Conter() {
    
    const cont =useSelector(State=>State.cont);//katjib lik state likayna fa redux
   const dispatch=useDispatch();//katarbat action m3a reducer
    const handleplu=()=>{
       dispatch({
        type:CRIMENT
             });
    }
    const handlemoi=()=>{
        dispatch({
          type:INCRIMENT
        });
     }
     const handinbg=(vl)=>{
      dispatch({
        type:INC_BY_VALUE,
        value:vl
      });
     }
  return (
    <div>
      <p>{cont}</p>   
      <button onClick={handleplu}>criment</button>
      <button onClick={handlemoi}>incriment</button>
      <button onClick={()=>handinbg(30)}>incriment+3</button>
    </div>
  )
}
