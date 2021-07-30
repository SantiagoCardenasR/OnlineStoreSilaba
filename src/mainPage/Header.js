import React from 'react'
import { Link } from "react-router-dom";
import "./MainpageStyle.css"
import logo from "../assets/img/logoSilaba.png"
import { Navbar, NavDropdown, Image, Nav } from 'react-bootstrap';

const MainPageHeader = () => {
    return (
        <header id="header" class="fixed-top" style={{margin: "0px", padding: "0px"}}>
                <Navbar collapseOnSelect className="mainPageHeaderNavbar" expand="lg">
                    <Navbar.Brand><Link to="/"><Image fluid src={logo} alt="" style={{contain: "content"}} /></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="mainPageHeaderNavbarDropdownButton" />
                    <Navbar.Collapse id="basic-navbar-nav" className="mainPageHeaderNavbarDropdown">

                            <NavDropdown title="¿Qué es sílaba?" id="basic-nav-dropdown">
                                <Nav.Link eventKey="1">
                                    <NavDropdown.Item ><Link to="/AsiS">Así es Sílaba </Link></NavDropdown.Item>
                                </Nav.Link>
                            </NavDropdown> 

                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <Nav.Link eventKey="2">
                                    <NavDropdown.Item ><Link to="/empresa">Sílaba en tu empresa</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/educacion">Sílaba en la educación</Link></NavDropdown.Item>
                                </Nav.Link>
                            </NavDropdown>

                            <NavDropdown title="Población sílaba" id="basic-nav-dropdown">
                                <Nav.Link eventKey="3">
                                    <NavDropdown.Item ><Link to="/Infancia">Infancia y juventud</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/Adulto">Adulto mayor</Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/Mujer">Mujer renaciente</Link></NavDropdown.Item>
                                </Nav.Link>
                            </NavDropdown>
                        
                            <NavDropdown title="Se parte del cambio" id="basic-nav-dropdown">
                                <Nav.Link eventKey="4">
                                    <NavDropdown.Item ><Link to="/seParteDelCambio"> Formatos de inscripción </Link></NavDropdown.Item>
                                    <NavDropdown.Item ><Link to="/Tienda">Tienda</Link></NavDropdown.Item>
                                </Nav.Link>
                                {/* <NavDropdown.Item ><Link to="/contacto">Contacto</Link></NavDropdown.Item> */}
                            </NavDropdown>

                    </Navbar.Collapse>
                </Navbar>
        </header>
    )
}

export default MainPageHeader
