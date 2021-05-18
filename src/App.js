import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/pages/Home";
import Sign from "./components/pages/Sign";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Sign} exact/>
        <Route path="/" component={Home} exact/>
      </Switch>
    </Router>
  );
}

export default App;
