import React from "react";
import Array from "./pages/Array";
import Tree from "./pages/Tree";
import Stack from "./pages/Stack";
//import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav/index.js";
import "./Style.css";


function App() {
  return (
    <div>
      <Nav className = "navComp" />
        <Switch>
          <Route exact path="/" component={Tree}/>
          <Route exact path = "/array" component = {Array}/>
          <Route exact path = "/tree" component = {Tree}/>
          <Route exact path = "/stack" component = {Stack}/>
        </Switch>
    </div>
  );
}

export default App;

