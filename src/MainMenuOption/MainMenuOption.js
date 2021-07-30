import React from 'react'
import "./MainMenuOption.css"
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainMenuOption = (props) => {
    return (
        <Container className="mainMenuOption">
            <Link to={props.link} className="mainMenuOption__link">
                <h2>{props.title}</h2>
                {props.img}
            </Link>
        </Container>
    )
}

export default MainMenuOption
