import React from "react";
import Array from "./pages/Array";
//import Nav from "./components/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavEx from "./components/Nav/index.js";
import "./Style.css";

function App() {
  return (
  <Router>
    <NavEx />
    <div className = {""}>
        <Switch>
          {/* <Route exact path = {"/"}>
            <Search />
          </Route> */}
          <Route exact path = {"/" || "/array"}>
            <Array />
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;

