import figure from '../resources/figure.jpg'

export default function Benefits2(){
    return(
        <div className="benefits2">
            <div className="benefits2-left">
                <p className="benefits2-left-title">See the Big Picture</p>
                <p className="benefits2-left-subtitle">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                <div className='benefits2-left-container'>
                    <ol className='benefits2-left-container-list'>
                        <li className='benefits2-left-container-list-item'>Spot Trends in Seconds: No more digging through numbers. </li>
                        <li className='benefits2-left-container-list-item'>Get Everyone on the Same Page: Share easy-to-understand reports with your team. </li>
                        <li className='benefits2-left-container-list-item'>Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.</li>
                        <li className='benefits2-left-container-list-item'>Your Global Snapshot: Get a quick, clear overview of your entire operation.</li>
                    </ol>
                </div>
                <div className="benefits2-left-cta">
                    <p className="benefits2-left-cta-text">Discover More</p>
                </div>
            </div>
            <img src={figure} className="benefits2-img"/>
        </div>
    )
}