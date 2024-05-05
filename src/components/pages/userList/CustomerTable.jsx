import React from 'react';
import "./customertable.css"
import { useEffect, useState } from "react";
import axios from 'axios';


const CustomerTable = () => {

    const [customer, setCustomer] = useState([{
          Id:123,Name:"sami",Email:"xyz@gmai.com",MobileNumber:9161671181,City:"dewas"
    }]);

    // useEffect(()=>{
    //   axios.get('http://localhost:3001')
    //   .then(user=>setCustomer(user.data))
    // .catch(err=>console.log(err))
    // },[])

  return (
    <div className="container">
    <table className="table">
      <thead className="table-header">
        <tr className="table-row">
          <th>Customer ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {customer.map((customer,index) => (
          <tr key={index}  className="table-row">
            <td>{customer.Id}</td>
            <td>{customer.Name}</td>
            <td>{customer.Email}</td>
            <td>{customer.MobileNumber}</td>
            <td>{customer.City}</td>
          </tr>
      ))}
      </tbody>
    </table>
  </div>
  );
};

export default CustomerTable;

