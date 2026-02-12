import cable from '../resources/Cable icon.svg'
import earth from '../resources/Earth icon.svg'
import chart from '../resources/Chart icon.svg'
import account from '../resources/Account icon.svg'
import mountains from '../resources/mountains.jpg'

export default function Benefits(){
    return(
        <div className="benefits">
            <h1 className="benefits-title">Benefits</h1>
            <h2 className="benefits-subtitle">We've cracked the code.</h2>
            <h3 className="benefits-subsub">Area provides real insights, without the data overload.</h3>
            <div className="benefits-list">
                <div className="benefits-list-item">
                    <img src={cable} className="benefits-list-item-logo"/>
                    <p className="benefits-list-item-title">Amplify Insights</p>
                    <p className="benefits-list-item-text 1">Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
                </div>
                <div className="benefits-list-item">
                    <img src={earth} className="benefits-list-item-logo"/>
                    <p className="benefits-list-item-title">Control Your Global Presence</p>
                    <p className="benefits-list-item-text 1">Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
                </div>
                <div className="benefits-list-item">
                    <img src={account} className="benefits-list-item-logo"/>
                    <p className="benefits-list-item-title">Remove Language Barriers</p>
                    <p className="benefits-list-item-text 2">Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
                </div>
                <div className="benefits-list-item">
                    <img src={chart} className="benefits-list-item-logo"/>
                    <p className="benefits-list-item-title">Visualize Growth</p>
                    <p className="benefits-list-item-text 2">Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
                </div>
            </div>
            <img src = {mountains} className='benefits-img'/>
        
        </div>
    )
}