import React, { useState } from 'react';
import { products } from './listproduct';
import {Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {incrementHandler, decrementHandler} from './redux products/action'
import {Link} from 'react-router-dom'

export default function Product() {

const dispatch= useDispatch();
const PLUS=(price, title)=>{dispatch(incrementHandler(price, title))};
const MINUS=(price)=>{dispatch(decrementHandler(price))};
const number =useSelector((state)=>state.counter)
const totalPrice =useSelector((state)=>state.price)
const itemList =useSelector((state)=>state.title)



return(
    <div className="shopping">
            <div className="product">
        {products.map(product => ( <div  className="product-title">
        <div key={product.title}>
            <div >
            <span role="img" aria-label={product.title}><img  src={product.image} width="200" height="220"/></span>
            <h6>{product.title}</h6>
            <Link to={`/Details/${product.id}`}>DETAILS</Link>
            </div>
            </div>
            <div className="product-btn" >
            <Button variant="danger" onClick={()=> PLUS(product.price, product.title)}>Add</Button> {' '}
            <span className="price">{product.price} dt</span> {' '}
            <Button variant="secondary"  onClick={()=> MINUS(product.price)}>Remove</Button>
        
        </div>
  
        </div>
        ))
       // .filter(product=>product.title.toUpperCase().includes(search.toUpperCase().trim()))
        }
        </div>

    <div className="bigcart">
    <div className="cart"><h3>Shopping Cart: </h3>
    <h5>Total items:{number}</h5> 
    <h5>Total price: {totalPrice}  dt</h5>
   
<div>
<h5>The selected items:</h5>
<li>{itemList}</li>
</div>
    
    <div>
    <Link to="/Courses"><Button variant="danger" ><i class="fa fa-shopping-basket"></i>  </Button></Link>
    </div>
    </div>
    
    </div>
    </div>
)
}
