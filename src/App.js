import React from "react";
// import "./assets/bootstrap/js/bootstrap.min.js";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
