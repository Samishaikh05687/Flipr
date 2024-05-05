import React, { useState } from 'react';
import './userList.css'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CustomerForm = ( ) => {
  
  const history = useHistory();

  
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [contact,setContact]=useState();
  const [city,setCity]=useState();
  const [Id,setId]=useState();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post("http://localhost:3001/users",{name,email,contact,city,Id})
    .then(result=>{
      console.log(result)
      history.push('/users')
    }
    ).catch(err=>console.log(err));
  };

 

  return (
    <div className="form-container">
      <h2>Add Customer Details</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="customerId">CustomerId</label>
          <input type="text" id="contact" name="contact"  placeholder="Enter CustomerId " onChange={(e)=>setId(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"  placeholder="Enter name" onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city"  placeholder="Enter city" onChange={(e)=>setCity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number</label>
          <input type="text" id="contact" name="contact"  placeholder="Enter contact number" onChange={(e)=>setContact(e.target.value)} required />
        </div>
        
        
        <button type="submit" className="button56">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
