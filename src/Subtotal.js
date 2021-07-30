import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';
import { Link, useHistory } from 'react-router-dom' 
import { Container, Button } from 'react-bootstrap';


function Subtotal() 
{
    const [{carrito}, dispatch] = useStateValue();
    const history = useHistory();

    const payment = () => {
        dispatch({
            type: "ADD_SHIPPING_DATA",
            shippingInfo: {
                name: document.getElementsByClassName('checkout__nameInput')[0].value,
                lastName: document.getElementsByClassName('checkout__lastNameInput')[0].value,
                city: document.getElementsByClassName('checkout__city')[0].value,
                address1: document.getElementsByClassName('checkout__addressInput')[0].value,
                address2: document.getElementsByClassName('checkout__address2Input')[0].value,
                phone: document.getElementsByClassName('checkout__phoneInput')[0].value,
            }
        })
        history.push("/checkoutBill");
    }

    return (
        <Container className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p className="subtotal__price">
                        Subtotal ({carrito.length} productos): <strong>{`${value}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>Esta orden contiene un regalo
                    </small>
                    </>
                )
                }
                decimalScale={2}
                value={getCartTotal(carrito)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <Button onClick={payment}>Seguir al pago</Button>

        </Container>
    )
}

export default Subtotal