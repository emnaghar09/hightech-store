import React from 'react';
import {Button} from 'react-bootstrap';

function cart() {
// // to add multiple items of one product
// const [cartItems, setCartItems] = useState([]);
// const onAdd = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//     setCartItems(
//         cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//         )
//     );
//     } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };
// // if the buyer wiches to remove an item from total
// const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {
//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };

 
  return (<div>
  <h1>recap card</h1>
  
 

  <Button variant="danger">Confirm</Button>
            
  
  </div>);
}

export default cart;
