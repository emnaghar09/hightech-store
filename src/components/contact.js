import React from 'react'
import {ListGroup, Button, Carousel}  from 'react-bootstrap';

import {Link} from 'react-router-dom'
function contact() {
    return (<div>
      <div class="image-offer">
      <div className="middlepart">Contact</div> </div>
        <div className='contact'>
            <ListGroup>
  <ListGroup.Item>ADRESS: Hightech, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053</ListGroup.Item>
  <ListGroup.Item>PHONE:   39 143 900</ListGroup.Item>
  <ListGroup.Item>EMAIL:   hello@hightech.co</ListGroup.Item>
 
</ListGroup>
{/* // here i will add a map */}
<div className="map">

</div>
 <br></br>
 
 <div className='carousel'>
            <Carousel>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="http://techpinions.com/wp-content/uploads/2012/06/Retail_Experience_Center_2_web.jpg"
    alt="First slide"
    />
<Carousel.Caption>
<h3 style={{color: 'black',  background: 'rgba(255,255,255,0.5)'}}>VISIT US IN OUR STORE</h3>
       
      </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://barbaraiweins.com/wp-content/uploads/2020/08/Tech-Store-in-Australia.jpg"
    alt="Second slide"
 
    />

<Carousel.Caption>
<h3 style={{color: 'black',  background: 'rgba(255,255,255,0.5)'}}>VISIT US IN OUR STORE</h3>
       
      </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://i.pinimg.com/originals/83/b2/61/83b261e5950b4c3f0f03bfa61c51e3dd.jpg"
    alt="Third slide"
    />
<Carousel.Caption>
<h3 style={{color: 'black',  background: 'rgba(255,255,255,0.5)'}}>VISIT US IN OUR STORE</h3>
       
      </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
    className="d-block w-100"
    src="https://assets1.chainstoreage.com/styles/content_sm/s3/teaser_image_468887.jpg?itok=RLUt3kAS"
    alt="Forth slide"
    />
<Carousel.Caption>
<h3 style={{color: 'black',  background: 'rgba(255,255,255,0.5)'}}>VISIT US IN OUR STORE</h3>
       
      </Carousel.Caption>
</Carousel.Item>



</Carousel>
        </div>
       <br></br>
        <div> <Link to="/"><Button variant="danger">Home</Button></Link></div>
       
        </div>
        
       </div>
    )
}

export default contact
