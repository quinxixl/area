import React from "react";
import quotePicture from "../resources/Image.png"

export default function Quote() {
    return (
        <div className="quote">
            <img src={quotePicture} alt="picture"/>
            <div className="quote__title">
                <p className="quote__title-phrase">
                    “I was skeptical, but Area has <br/>
                    completely transformed the way I <br/>
                    manage my business. The data <br/>
                    visualizations are so clear and <br/>
                    intuitive, and the platform is so easy <br/>
                    to use. I can't imagine running my <br/>
                    company without it.”
                </p>
                <p className="quote__title-author">John Smith</p>
                <p className="quote__title-head">Head of Data</p>
            </div>
        </div>
    )
}