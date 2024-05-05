import "./sidebar.css";

import LineStyleIcon from '@mui/icons-material/LineStyle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentityIcon className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/product" className="link">
              <li className="sidebarListItem">
                <AddShoppingCartIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/shipping" className="link">

            <li className="sidebarListItem">
              <LocalShippingIcon className="sidebarIcon" />
               Shipping
            </li>
            </Link>
          </ul>
        </div>
      
      </div>
    </div>
  );
}
