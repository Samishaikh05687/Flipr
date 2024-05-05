import React, { useState } from 'react';
import './product.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Product = ( ) => {
  
  const history = useHistory();

  
  const [productname,setProductname]=useState();
  const [quantity,setQuantity]=useState();
  const [pricing,setPricing]=useState();
  const [mrp,setMrp]=useState();
  const [purchaseId,setPurchaseId]=useState();
  const [Id,setId]=useState();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    axios.post("http://localhost:3001/product",{productname,quantity,pricing,mrp,purchaseId,Id})
    .then(result=>{
      console.log(result)
      history.push('/product')
    }
    ).catch(err=>console.log(err));
  };

 

  return (
    <div className="form-container">
      <h2>Add Product Details</h2>
      <form onSubmit={handleSubmit}>
      
        <div className="form-group">
          <label htmlFor="productname">Product Name</label>
          <input type="text" id="productname" name="name"  placeholder="Enter product name" onChange={(e)=>setProductname(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="qantity">Quantity</label>
          <input type="number" id="uantity" name="quantity"  placeholder="Enter quantity" onChange={(e)=>setQuantity(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="pricing">Price</label>
          <input type="text" id="Pricing" name="pricing"  placeholder="Enter Price" onChange={(e)=>setPricing(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="mrp">Mrp</label>
          <input type="text" id="mrp" name="mrp"  placeholder="Enter Mrp" onChange={(e)=>setMrp(e.target.value)} required />
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

export default Product;
