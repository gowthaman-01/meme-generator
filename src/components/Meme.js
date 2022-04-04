import React from "react";

const Meme = () => {
    return (
        <div>
            <form className="meme">
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
                    <button className="form-button" >Generate image</button>
                </div>

            </form>
        </div>

    )
}

export default Meme;