import React from 'react'
import {Card, Button} from 'react-bootstrap';

  function Details({Liste,match,history}) {
    console.log(history)
 
    const found=Liste.find((elem) => (elem.id == match.params.id))
    console.log(found)
   
    return (
        <div className="details">


<Card className="detailscard">
<Card.Img variant="top" className="detailsimg" src={found.image} style={{ width: '18rem' , height: '15rem', border:'solid black'  }}/>
<Card.Body>
<h4>{found.title}</h4>
<h6>Price: {found.price} dt</h6>

  <Card.Text>
  {found.disc}
  </Card.Text>
</Card.Body>
<div className="btns">
 <Button variant="danger" onClick={()=>history.goBack()}>Go back</Button>
 </div>
</Card>
            
        
         
           
        
     

   
            
        </div>
    )
}

export default Details;
