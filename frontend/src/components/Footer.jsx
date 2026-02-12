import logo from '../resources/footer_logo.svg'

export default function Footer() {
    return (
        <div className="footer">
            <nav className="footer-nav">
                <ul className="footer-nav-list">
                    <li className="footer-nav-list-item">Benefits</li>
                    <li className="footer-nav-list-item">Specification</li>
                    <li className="footer-nav-list-item">How-to</li>
                </ul>
            </nav>
            <div className="footer-bottom">
                <img src={logo} alt="Footer logo" className="footer-bottom-logo"/>
                <p className="footer-bottom-copyright">© Area. 2025</p>
                <p className="footer-bottom-rights">All Rights Reserved</p>
            </div>
        </div>
    )
}