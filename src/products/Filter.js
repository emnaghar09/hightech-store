import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap'; 


function Filter(setsearch) {

    return (
        <div className='filter'>
         <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"> <i class="fa fa-search"></i> </InputGroup.Text>
    <FormControl
      placeholder="search product by name"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e) => setsearch((e.target.value))}
    />
  </InputGroup>
   
        </div>
    )
}

export default Filter
