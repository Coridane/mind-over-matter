import React from 'react'
import {
    Nav,
    Navbar
} from 'react-bootstrap'
//CSS
import './navMenu.css'

export default function NavMenu() {

    return (
        <Navbar bg="dark" expand="md" variant="dark">
        <Navbar.Brand href="/"><i className="fas fa-home"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/game">Game</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}