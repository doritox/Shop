import React,{useState} from 'react'
import '../App.css';
import List from '../components/List.js';

export default function Header(props) {
    const [nav,Setnav] = useState(false);
    
    return (
        <div className="App">
          <div className="header">
              {/* <button onClick = {()=>Setnav(false)}>Home</button>
              <button onClick={()=>Setnav(true)} >list Cart</button> */}
              {props.but3}
              <p className="myS">My Shop!</p>
              {props.but4}
              </div>           
              {props.change}
              
        </div>
    )
}
