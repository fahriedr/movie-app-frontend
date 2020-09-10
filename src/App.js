import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-dark">
      <Router>
        <Navbar />
        <Body />
      </Router>
    </div>
  );
}

export default App;
