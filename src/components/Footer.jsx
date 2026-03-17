 import logo from '../images/pomleonpartnerslogo.jpeg';
 import '../components/Footer.css';

 
 function PageFooter() {
    return (
 <footer className="footer">
           <div className="footer-content">

            <div className="footer-col">
                <div className="footer-brand">
            <img src={logo} alt="Pomleon Partners Logo" className="footer-logo" />
            </div>
                <p>Family-owned home buyers serving Pawhuska and Osage County.
                    Honest offers. No pressure. No repairs.
                </p>
            </div>

            <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/how-it-works">How It Works</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Contact Us</h4>
            <p><strong>Phone: </strong> (702)793-6624</p>
            <p><strong>Gmail:</strong> admin@pomleonpartners.com</p>
            </div>

           </div>

           <p className="footer-bottom">
              © {new Date().getFullYear()} Pomleon Partners LLC • All Rights Reserved
           </p>
           </footer>
    );
 }

 export default PageFooter;