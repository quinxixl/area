import road from '../resources/mountain_road.jpg'

export default function Map() {
    return (
        <div className="map">
            <div className="map-title">
                <h2 className="map-title-text">Map Your Success</h2>
                <button className="map-title-button">Discover More</button>
            </div>
            <div className="map-content">
                <div className="map-content-block">
                    <div className="map-content-block-item">
                        <p className="map-content-block-item-number">01</p>
                        <p className="map-content-block-item-title">Get Started</p>
                        <p className="map-content-block-item-description">With our intuitive setup, you’re up and running in minutes.</p>
                    </div>
                    <div className="map-content-block-item">
                        <p className="map-content-block-item-number">02</p>
                        <p className="map-content-block-item-title">Customize and Configure</p>
                        <p className="map-content-block-item-description">Adapt Area to your specific requirements and preferences.</p>
                    </div>
                    <div className="map-content-block-item">
                        <p className="map-content-block-item-number">03</p>
                        <p className="map-content-block-item-title">Grow Your Business</p>
                        <p className="map-content-block-item-description">Make informed decisions to exceed your goals.</p>
                    </div>
                </div>
                <img src={road} alt="Road in mountain" className="map-content-img"/>
            </div>
        </div>
    )
}