import React,{useState} from 'react'
import '../App.css';

export default function List(props) {
    const [number,setIndex]= useState(props.index)
    const delete1 =()=>{
        props.del(number);
    }
    
    
    return (
        
        <div style={{backgroundColor:'grey'}}>
           <span style={{backgroundColor:'grey',fontSize:'14px',fontWeight:'bold'}}> {props.newp} {props.newpn}</span>
           <button onClick={delete1} style={{color:"red"}}>x</button> 
        </div>
        
    )
}
