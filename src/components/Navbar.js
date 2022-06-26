import React from "react";
import memeImage from "../../src/images/meme-generator.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="navbar-image" src={memeImage} alt="meme"></img>
      <h1 className="navbar-title">Meme Generator</h1>
    </div>
  );
};

export default Navbar;
