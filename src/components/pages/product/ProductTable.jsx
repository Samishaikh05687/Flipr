import React from 'react';
import "./producttable.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ProductTable = () => {

    const [product, setProduct] = useState([{
          ProductName:"Iphone15",Quantity:10,Pricing:55000,MRP:60000,PurchasedId:301,CId:401
    }]);

    // useEffect(()=>{
    //   axios.get('http://localhost:3000/users')
    //   .then(customer=>setCustomer(customer.data))
    // .catch(err=>console.log(err))
    // },[])

  return (
    <div className="container">
    <table className="table">
      <thead className="table-header">
        <tr className="table-row">
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Pricing</th>
          <th>MRP</th>
          <th>PurchasedId</th>
          <th>CId</th>
        </tr>
      </thead>
      <tbody>
        {product.map((product, index) => (
          <tr key={index} className="table-row">
            <td>{product.ProductName}</td>
            <td>{product.Quantity}</td>
            <td>{product.Pricing}</td>
            <td>{product.MRP}</td>
            <td>{product.PurchasedId}</td>
            <td>{product.CId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default ProductTable;

