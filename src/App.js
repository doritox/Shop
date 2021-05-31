/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import Header from './components/Header.js';
import Homepage from './components/Homepage.js';
import List from './components/List.js';
import './App.css';
import cartimag from './img/ed.png'
import cartimagg from './img/ed12.png'
import react,{useState} from 'react';
import NumberFormat from 'react-number-format';


function App() {
  
  var name1 = 'Name:';
  var price = 'Price:';
  const [listofprodect,Setlistofprodect] = useState([{name:'human',price:'15000'},{name: 'Computer ', price: '100'}
                                                    ,{name: 'pool ', price: '500'},
                                                     {name: 'car ',price: '100000'}]);                                                    
 /////////////////////////////////////////////////////////
                                                     
 const [listofprodectN,SetlistofprodectN] = useState([]);
  
const AddNewpost= (n,p)=>{
   SetlistofprodectN([...listofprodectN,{ name:n, price:p}]);
   
   
  }
  
  
  const buyAll = ()=>{
   let bool = SetlistofprodectN([]);
   alert('Thank you For Buy!');
   return bool;
  }
  const deletePost=(i)=>{
    let tempPost = listofprodectN.filter((e,index) =>(index != i));
    SetlistofprodectN(tempPost);
    }
    const calcTotal = () => {
      let sumPrice = 0;
      listofprodectN.forEach((element) => { 
          sumPrice += Number(element.price); 
      })
      return sumPrice;
  }
  const [nav,Setnav] = useState(false);

  const [prodectName,setProdectName] = useState('');
  const [prodectPrice,setProdectPrice] = useState('')
  const changeName = (element)=>{
setProdectName(element.target.value);

  }
  const changePrice = (element)=>{
    
    setProdectPrice(element.target.value);
    
  }

  const show = ()=> {
    if(nav === false){
      const Min_VAL = 0;
  const withValueCap = (inputObj) => {
    const { value } = inputObj;
    if (value >= Min_VAL) return inputObj;
  };
      return(
        <div>
          name:price:
          {listofprodect.map(((list)=> {
           
        return(
          <Homepage post = {list.name} post1 = {list.price} addne = {AddNewpost} />
          
        )
        
      }
      
      ))}
      <h5>   AddNewProudct:<br/>   Name:<input id="name1" style={{backgroundColor:"white"}} onChange={changeName}></input>
      <br/>Price: <NumberFormat  onChange={changePrice} id="price1" style={{backgroundColor:"white"}} isAllowed={withValueCap} /><br/><button style={{fontWeight:'bold'}} onClick={()=>{AddNewpostN(prodectName,prodectPrice)}}>Add</button></h5>
      
      
        </div>
      )
    }
    else{
      
      
      return(
        <div>
          {/* <List del = {deletePost}/> */}
          {listofprodectN.map(((listn,i)=>{
            
            
            return(
              <div>
              <List newp = {listn.name} newpn = {listn.price} index = {i} del = {deletePost}   />
              
              </div>
            )
            }))}
           <h5 style={{backgroundColor:'grey'}}>Total Price:{calcTotal()} <button onClick={buyAll}>buy!</button></h5>
           
            
        </div>
      )
    }
  }
  
 const but1 = <img className="cartima" src={cartimagg} onClick = {()=>Setnav(false)}/>
 const but2 = <img className="cartima" src={cartimag} onClick = {()=>Setnav(true)}/>
 const AddNewpostN = (X,Y)=>{
Setlistofprodect([...listofprodect, {name:X, price:Y}] )
setProdectName('');
setProdectPrice('');
document.getElementById("name1").value =""; 
document.getElementById('price1').value= "";
 }

   return (
    <div className="App">
      
      <Header change = {show()} but3 = {but1} but4 = {but2}  />
      
      
      
    </div>
  );
}

export default App;
