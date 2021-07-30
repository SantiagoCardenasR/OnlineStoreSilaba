import React from 'react'
import ReactDOM from "react-dom"
import { Container, Button } from 'react-bootstrap';
import "./NotificationPortal.css"

const NotificationPortal = (props) => {

    const clickHandler = (pShowPortal) => {
        props.onPortalClick(pShowPortal)
    }

    if(props.visible === true) {
        return ReactDOM.createPortal((
            <Container className="notificationPortal">
                <Container className="notificationPortal__info">
                    <h2>El producto a sido agregado al carrito de compras con éxito</h2>
                    <Button onClick={() => clickHandler(false)} className="notificationPortal__button">Cerrar</Button>
                </Container>
            </Container>
        ), document.getElementById("root")) 
    } else {
        return null
    }
}

export default NotificationPortal
