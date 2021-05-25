import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
