import React from "react";


export default function Adverising() {
    return (
        <div className="adverising">
            <p className="adverising__subtitle">
                Specs
            </p>
            <p className="adverising__title">
                Why Choose Area?
            </p>
            <p className="adverising__description">
                You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to<br/>
                streamline your business.
            </p>
            <div className="adverising__btn-container">
                <button className="adverising__btn">
                    Discover More
                </button>
            </div>
            <div className="adverising__table">
                <div className="adverising__table-area">
                    <p className="adverising__table-area-title">Area</p>
                    <ul>
                        <li className="adverising__table-area-item">Ultra-fast browsing</li>
                        <li className="adverising__table-area-item">Advanced AI insights</li>
                        <li className="adverising__table-area-item">Seamless integration</li>
                        <li className="adverising__table-area-item">Advanced AI insights</li>
                        <li className="adverising__table-area-item">Ultra-fast browsing</li>
                        <li className="adverising__table-area-item adverising__table-area-item-last">Full UTF-8 support</li>
                    </ul>
                </div>
                <div className="adverising__table-webSurge">
                    <p className="adverising__table-webSurge-title">WebSurge</p>
                    <ul>
                        <li className="adverising__table-webSurge-item">Fast browsing</li>
                        <li className="adverising__table-webSurge-item">Basic AI recommendations</li>
                        <li className="adverising__table-webSurge-item">Restricts customization</li>
                        <li className="adverising__table-webSurge-item padding-fix">Basic AI insights</li>
                        <li className="adverising__table-webSurge-item">Fast browsing</li>
                        <li className="adverising__table-webSurge-item adverising__table-webSurge-item-last2">Potential display errors</li>
                    </ul>
                </div>
                <div className="adverising__table-hyperView">
                    <p className="adverising__table-hyperView-title">HyperView</p>
                    <ul>
                        <li className="adverising__table-hyperView-item">Moderate speeds</li>
                        <li className="adverising__table-hyperView-item">No AI assistance</li>
                        <li className="adverising__table-hyperView-item">Steep learning curve</li>
                        <li className="adverising__table-hyperView-item">No AI assistance</li>
                        <li className="adverising__table-hyperView-item">Moderate speeds</li>
                        <li className="adverising__table-hyperView-item">Partial UTF-8 support</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}