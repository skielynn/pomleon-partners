import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/pomleonpartnerslogo.jpeg'

function NavigationBar() {
    return (
        <Navbar expand="lg" className="navbar-custom"> 
        <Container>
        <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Pomleon Partners Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation"/>

        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                <Nav.Link as={Link} to="/how-it-works">How It Works</Nav.Link>
                <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>

              <Link to="/contact" className="cash-offer-btn">Get Cash Offer</Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavigationBar; 