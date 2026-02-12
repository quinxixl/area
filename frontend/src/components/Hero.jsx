import heroImg from "../resources/Hero image.svg"
import logo1 from "../resources/Logo 1.svg"
import logo2 from "../resources/Logo 2.svg"
import logo3 from "../resources/Logo 3.svg"
import logo4 from "../resources/Logo 4.svg"
import logo5 from "../resources/Logo 5.svg"
import logo6 from "../resources/Logo 6.svg"

export default function Hero(){
    return(
        <div className='hero'>
        <h1 className="hero-title">Browse everything.</h1>
        <img src = {heroImg} className="hero-img"/>
        <h2 className="hero-subtitle">Trusted by:</h2>
        <div className="hero-swiper">
            <img src = {logo1} className="hero-swiper-img"/>
            <img src = {logo2} className="hero-swiper-img"/>
            <img src = {logo3} className="hero-swiper-img"/>
            <img src = {logo4} className="hero-swiper-img"/>
            <img src = {logo5} className="hero-swiper-img"/>
            <img src = {logo6} className="hero-swiper-img"/>
        </div>
        </div>
    );
}