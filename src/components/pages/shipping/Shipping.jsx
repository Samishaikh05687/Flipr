import React, { useState } from 'react';
import './shipping.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Shipping = ( ) => {
  
  const history = useHistory();

  
  const [address,setAddress]=useState();
  const [pincode,setPincode]=useState();
  const [city,setCity]=useState();
  const [purchaseId,setPurchaseId]=useState();
  const [Id,setId]=useState();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post("https://localhost:3001/shipping",{address,pincode,city,purchaseId,Id})
    .then(result=>{
      console.log(result)
      history.push('/shipping')
    }
    ).catch(err=>console.log(err));
  };

 

  return (
    <div className="form-container">
      <h2>Add Shipping Details</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="name"  placeholder="Enter Address" onChange={(e)=>setAddress(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="email"  placeholder="Enter City" onChange={(e)=>setPincode(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="pincode">Pincode</label>
          <input type="text" id="city" name="city"  placeholder="Enter city" onChange={(e)=>setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Purchase Id</label>
          <input type="text" id="contact" name="contact"  placeholder="Enter PurchasedId" onChange={(e)=>setPurchaseId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="customerId">CustomerId</label>
          <input type="text" id="customerid" name="contact"  placeholder="Enter CustomerId" onChange={(e)=>setId(e.target.value)} required />
        </div>
        
        <button type="submit" className="button56">Add Details</button>
      </form>
    </div>
  );
};

export default Shipping;
