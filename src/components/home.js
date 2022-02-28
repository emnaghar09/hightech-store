import React, { useState } from 'react';
import Product  from '../products/products';
import Filter  from '../products/Filter'


function Home() {
  const [search, setsearch] = useState('')
//   const {products}=Data
//   const [cart, setCart]=useState([])
//   const onAdd = (product) => {
// const exist = cart.find((x)=>x.id === product.id);
// if (exist) {
// setCart(cart.map((x)=>x.id=== product.id? {...exist, qty:exist.qty+1}:x))

// }else{ setCart([...cart, {...product,qty:1}])}
// }
  return (<div>
  <div className="middlepart">
      <h1 className="title">WELCOME TO HIGHTECH ONLINE STORE</h1>
      <h2 className="gamme">Une large gamme de produits pour rester connecté</h2>
      <div>Livraison gratuite à partir de 150dt d'achats</div>
      
</div>
<Filter setsearch={setsearch}/>
<Product />
  </div>);
}

export default Home;
