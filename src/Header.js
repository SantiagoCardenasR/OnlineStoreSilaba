import React, {useState} from 'react';
import './Header.css';

import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {getCartTotal} from './reducer';
import { auth } from './firebase';
import { getTotalCartItems } from './reducer';
import { Navbar, Nav, Container } from 'react-bootstrap';

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Header() 
{
    const [{carrito,user, user_name}, dispatch] = useStateValue();
    const [search, setSearch] = useState('');
    const RegExp = /[a-zA-Z\á\é\í\ó\ú]+/; 

    const logOut = () => {
        if(user)
        {
            sessionStorage.removeItem('User');
            sessionStorage.removeItem("User_name");
            sessionStorage.removeItem("User_email");
            sessionStorage.removeItem("User_id");
            
            dispatch({
                type: "ADD_USER_DATA",
                userData:{
                    user_name: "", 
                    user_email: "", 
                    user_id: ""
                }
            });

           auth.signOut(); 
        }
    }
    return (
        <Navbar collapseOnSelect fixed="left" expand="lg" className="header">
            <Container className="header__navbarContainer">
                <Navbar.Toggle aria-controles="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav id="header__navbarOptions" className="header__navbarOptions" >
                            <Link className="header__link" to="/">
                                <img className="header__linkImage" src={require("./images/logo.jpg")} alt="Header logo"/>
                            </Link>

                            <Nav.Link eventKey="1">
                                <Link className="header__link" to="/Tienda">
                                    <p className="header__optionLine1">Inicio</p>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="2">
                                <Link className="header__link" to={!user && "/login"}> 
                                    <Container onClick={logOut} className="header__optionsLinesContainers"> 
                                        <p className="header__optionLine1">Hola <br/> {user ? user_name:""}</p>
                                        <p className="header__optionLine2">{user ? "Cerrar Sesión":"Iniciar Sesión"}</p>
                                    </Container>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="3">
                                <Link className="header__link" to="/library">
                                    <p className="header__optionLine1">Librería</p>
                                    <ArrowForwardIosIcon className="header__optionIcon"/>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="4">
                                <Link className="header__link" to="/coffe">
                                    <p className="header__optionLine1">Café</p>
                                    <ArrowForwardIosIcon className="header__optionIcon"/>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="5">
                                <Link className="header__link" to="/art">
                                    <p className="header__optionLine1">Arte</p>
                                    <ArrowForwardIosIcon className="header__optionIcon"/>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="6">
                                <Link className="header__link" to="/jardinera">
                                    <p className="header__optionLine1">Jardineras</p>
                                    <ArrowForwardIosIcon className="header__optionIcon"/>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="7">
                                <Link className="header__link" to="/donation">
                                    <p className="header__optionLine1">Hacer Donación</p>
                                    <ArrowForwardIosIcon className="header__optionIcon"/>
                                </Link>
                            </Nav.Link>

                            <Nav.Link eventKey="8">
                                <Link className="header__link" to="/checkout">
                                    <span className="header__cartQnt">{getTotalCartItems(carrito) !== undefined ? getTotalCartItems(carrito): 0}</span>
                                    <ShoppingCartIcon className="header__carritoIcono"/>
                                    <p className="header__carritoNombre">CARRITO</p>
                                    <p>${getCartTotal(carrito)}</p>
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            <Container className="header__search">
                <input className="header__serachInput" type="text" onChange={event => setSearch(event.target.value)} placeholder="Buscar" />
                <Link className="header__searchLink" to={ (search !== '' && search !== undefined && RegExp.test(search)) ? "/store/"+search: "/"}>
                    <SearchIcon className="header__searchIcon" />
                </Link>
            </Container>
        </Navbar>
    )
}

export default Header
