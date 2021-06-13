import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";
import NewProduct from "./pages/NewProduct/NewProduct";
import NewUser from "./pages/NewUser/NewUser";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import User from "./pages/User/User";
import UserList from "./pages/UserList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={UserList}/>
          <Route path="/users/user=:id" component={User}/>
          <Route path="/users/newuser" component={NewUser}/>
          <Route exact path="/products" component={ProductList}/>
          <Route path="/products/product=:id" component={Product}/>
          <Route path="/products/newproduct" component={NewProduct}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;
