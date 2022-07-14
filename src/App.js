import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="" component={Home} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
