import React from 'react'
import '../App.css';

export default function Homepage(props) {
    return (
        <div className="himep">
        <div className="homepage" >
            <p><span  >{props.name1}</span>
           <span style={{position:'relative',left:'50px'}}>
            {props.price} </span></p>
            <div >
              <p>{props.post}
             <span style={{position:'relative',left:'50px'}}> {props.post1}</span>
               <button onClick = {()=> props.addne(props.post,props.post1)} style={{color:'green',backgroundColor:'red',position: 'relative',left:'114px'}}>+</button>
              </p>
              
            </div>
        </div>
        </div>
    )
}
