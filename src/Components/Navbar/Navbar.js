import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./navbar.css";
import { useDispatch } from 'react-redux';
import { setScroll } from '../../store/reducerSlice';
export default function Navbars() {
    const dispatch = useDispatch();
    const scrollAbout = () => {
        window.scrollTo(0, 600)
    }
    const scrollSkills = () => {
        window.scrollTo(0, 1300)
    }
    const scrollPortfolio = () => {
        window.scrollTo(0, 1800)
    }
    const scrollContact = () => {
        window.scrollTo(0, 2400)
    }
    return (
        <Navbar bg="black" expand="lg">
            <Container>
                <Navbar.Brand className='fs-4' href="#home">Moudy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link onClick={() => scrollAbout()} href="#link">About</Nav.Link>
                        <Nav.Link onClick={() => scrollSkills()} href="#home">Skills</Nav.Link>
                        <Nav.Link onClick={() => scrollPortfolio()} href="#link">Protfolio</Nav.Link>
                        <Nav.Link onClick={() => scrollContact()} href="#link">Contact-Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
