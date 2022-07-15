import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Booking from "./pages/booking/Booking";
import ProductDetails from "./pages/productDetails/ProductDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="" component={Home} exact /> */}
          <Route path="/" component={Home} exact />
          <Route path="/table" component={Booking} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ProductDetails} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
