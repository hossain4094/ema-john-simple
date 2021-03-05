import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componanents/Header/Header';
import Shop from './componanents/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componanents/Review/Review';
import Inventory from './componanents/Inventory/Inventory';
import NotFound from './componanents/NotFound/NotFound';
import ProductDetail from './componanents/ProductDetail/ProductDetail';

function App() {
  return (
    <div >
       <Header></Header>
      <Router>
        <Switch>
          <Route path ="/shop">
          <Shop></Shop>
          </Route >

          <Route path="/review">
            <Review></Review>
          </Route>

          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetail></ProductDetail>

          </Route>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
