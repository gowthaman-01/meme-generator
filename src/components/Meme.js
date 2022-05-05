import React, { useState } from "react";
import memeData from "../data/memeData"

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    });
    
    const [imageData, setImage] = useState(memeData.data.memes);

    const randomNumberInArray = (arrayLength) => {
        return Math.floor(Math.random() * arrayLength);
    }
    const showMeme = () => {
        const randomNumber = randomNumberInArray(imageData.length);
        const imageUrl = imageData[randomNumber].url;
        console.log(imageUrl)
        setMeme(prevMeme => 
            ({
                ...prevMeme, 
                randomImage: imageUrl
            })
        )
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
                <img src={meme.randomImage} className="meme-template" alt="meme" />
            </div>
        </div>

    )
}

export default Meme;