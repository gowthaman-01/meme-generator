import React, { useState } from "react";
import memeData from "../data/memeData"

const Meme = () => {
    const imageSource = memeData.data.memes;
    const [meme, setMeme] = useState("");
    const showMeme = () => {
        const randomNumber = Math.floor(Math.random() * imageSource.length)
        const imageUrl = imageSource[randomNumber].url
        setMeme(imageUrl)
    }

    return (
        <div>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form-input"
                    id="left-input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    id="right-input"
                />
            </div>
            <div className="button">
                <button className="form-button" onClick={showMeme}>Generate image</button>
            </div>
            <div className="meme-template-container">
                <img src={meme} className="meme-template" alt="meme" />
            </div>
        </div>

    )
}

export default Meme;