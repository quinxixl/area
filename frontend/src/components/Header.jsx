import logo from '../resources/logo.svg'

export default function Header() {
    return(
        <div className="header">
            <img src = {logo} className="header-logo"/>
            <nav className='header-nav'>
                <ul className='header-nav-list'>
                    <li><a>Benefits</a></li>
                    <li><a>Specifications</a></li>
                    <li><a>How-to</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </nav>
            <div className='header-cta'>
                <a>Learn More</a>
            </div>
        </div>
    );
}