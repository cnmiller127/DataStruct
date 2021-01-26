import React from "react";
import Array from "./pages/Array";
import Tree from "./pages/Tree";
//import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavEx from "./components/Nav/index.js";
import "./Style.css";


function App() {
  return (
    <div className = {""}>
    <NavEx />
          <Route exact path = "/array" component = {Array} />
          <Route exact path = "/tree" component = {Tree}/>
    </div>
  );
}

export default App;

