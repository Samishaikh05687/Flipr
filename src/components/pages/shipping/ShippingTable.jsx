import React from 'react';
import "./shippingtable.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ShippingTable = () => {

    const [shipping, setShipping] = useState([{
          Address:"2 Anand Vihar",City:"Indore",Pincode:55000,PurchasedId:301,CId:401
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
          <th>Address</th>
          <th>City</th>
          <th>Pincode</th>
          <th>PurchasedId</th>
          <th>CId</th>
        </tr>
      </thead>
      <tbody>
        {shipping.map((shipping, index) => (
          <tr key={index} className="table-row">
            <td>{shipping.Address}</td>
            <td>{shipping.City}</td>
            <td>{shipping.Pincode}</td>
\            <td>{shipping.PurchasedId}</td>
            <td>{shipping.CId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default ShippingTable;

