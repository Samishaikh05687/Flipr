import React from "react";
import "./home.css";
import CustomerTable from "./userList/CustomerTable";
import ProductTable from "./product/ProductTable";
import ShippingTable from "./shipping/ShippingTable";

const Home = () => {
  return (
    <div className="container">
      <div className="left">
        <h4 className="head">Customer Details</h4>
        <CustomerTable />
      </div>
      <div className="right">
      <h4 className="head">Product Details</h4>
        <ProductTable />
        <div className="rb">
        <h4 className="head">Shipping Details</h4>
          <ShippingTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
