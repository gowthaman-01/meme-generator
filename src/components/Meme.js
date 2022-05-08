import React, { useEffect, useState } from "react";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        randomImage: ""
    });
    const [imageData, setImageData] = useState([]);
    const [generated, setGenerated] = useState(false);
    useEffect(() => {
        const getMemes = async() => {
            const response = await fetch('https://api.imgflip.com/get_memes');
            const memeData = await response.json();
            setImageData(memeData.data.memes);
        }
        getMemes();
    }, []) 
    const randomNumberInArray = (arrayLength) => {
        return Math.floor(Math.random() * arrayLength);
    }
    const handleInput = (event) => {
        event.preventDefault();
        const {name, value} = event.target; 
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    const showMeme = () => {
        const randomNumber = randomNumberInArray(imageData.length);
        const imageUrl = imageData[randomNumber].url;
        setGenerated(true);
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
                    name="topText"
                    onChange={handleInput}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form-input"
                    id="right-input"
                    name="bottomText"
                    onChange={handleInput}
                />
            </div>
            <div className="button">
                <button className="form-button" onClick={showMeme}>Generate image</button>
            </div>
            <div className="meme-template-container">
                {generated && <div className="meme-text top">{meme.topText}</div>}
                <img src={meme.randomImage} className="meme-template"/>
                {generated && <div className="meme-text bottom">{meme.bottomText}</div>}
            </div>
        </div>

    )
}

export default Meme;