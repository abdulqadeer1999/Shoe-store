

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Product from './components/Products'
import ProductItems from './components/ProductItems'
import Navbar from './components/Navbar'
function RouteConfig() {
    return (
      <div>
        <Router>
          
         <Navbar />
            <Switch>
             
                <Route exact path ="/" component ={Home} />
                <Route exact path ="/product" component ={Product} />
                <Route path ="/about" component ={About} />
                <Route path ="/productitems/:id" component ={ProductItems} />
                
            </Switch>
        </Router>
      </div>
    );
  }
  
  export default RouteConfig;
  