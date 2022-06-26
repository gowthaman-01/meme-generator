import React from "react";
import Navbar from "./components/Navbar";
import Meme from "./components/Meme";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="app-body">
        <Meme />
      </div>
    </div>
  );
}

export default App;
