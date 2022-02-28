import React from 'react';
import logo from '../logo.jpg'
import {Card, Button} from 'react-bootstrap';

function footer() {
  return( <div className="footer">
<div className="hours"> <p>Working hours:</p>
<ul>
    <li>Monday to Friday 07:00 - 22:00</li>
    <li>Weekend 07:00 - 18:00 </li>
    
</ul>

</div>
<div> <p>Follow us</p>
<div className="socialmedia">
<Button variant="light"><i class="fa fa-facebook-f"></i></Button>{' '}

<Button variant="light"><i class="fa fa-instagram"></i></Button>

</div>

</div>
<div>
<h5>© 2021 – 2022 </h5>
This site is protected by the Google Privacy Policy 
<br></br>
<div>and Terms of Service apply.</div>
</div>


  </div>
  )
}

export default footer;
