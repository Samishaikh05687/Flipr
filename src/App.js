import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import Product from "./components/pages/product/Product";
import Shipping from "./components/pages/shipping/Shipping";

function App() {
  
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
       
          <Route  path="/users">
            <UserList />
          </Route>
           
          <Route  path="/product">
            <Product />
          </Route>

          <Route  path="/shipping">
            <Shipping />
          </Route>
          
          
       
         </Switch>
      </div>
    </Router>
  );
}

export default App;
