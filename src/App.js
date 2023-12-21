import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/Productlisting";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetail";
import Electronics from "./containers/Electronics";
import jewelery from "./containers/jewelery";
import mens from "./containers/mens";
import womens from "./containers/womens";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route path="/products/category/electronics" exact component={Electronics} ></Route>
          <Route path="/products/category/jewelery" exact component={jewelery} ></Route>
          <Route path="/products/category/mens" exact component={mens} ></Route>
          <Route path="/products/category/womens" exact component={womens} ></Route>
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;