import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="d-flex justify-content-center">
                    <Nav >
                        <NavLink to="/" className="text-decoration-none text-light h2">Welcome To Xeno</NavLink>
                        {/* <NavLink to="/" className="text-decoration-none text-light">Features</NavLink> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
