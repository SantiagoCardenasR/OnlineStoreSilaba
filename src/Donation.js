import React, { useState, useEffect } from 'react'
import md5 from 'md5';
import './Donation.css'
import banner from './images/Donation_banner.gif';
import { useStateValue } from './StateProvider';

import { Container, Image, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Donation() {
    const [{user_email, user_id, user}, dispatch] = useStateValue();
    const [donationValue, setDonationValue] = useState(0);
    const [donatorName, setDonatorName] = useState("");
    const [donationMessage, setDonationMessage] = useState("");
    const randomNumber = Math.floor(Math.random() * 10000);
    const referenceCode = user_id + randomNumber;
    const signature = md5("Nu3I8fJGp7qRPW6H35349Jc5i5~811632~"+referenceCode+"~"+donationValue+"~COP");
    const RegExp = /^\d*\.?\d*$/; 

    function valid(elem) {
        if (RegExp.test(elem)) { 
            setDonationValue(elem);
        } else {
            setDonationValue(0); 
        } 
    }

    useEffect(() => {
        console.log("Email: " + user_email)
        console.log("ID: " + user_id)    
    }, [])
    
    const makeBill = () => {
        dispatch({
          type: "MAKE_DONATION_BILL",
          billData: {
            referenceCode: referenceCode,
            donatorId: user_id,
            donator_email: user_email,
            donator_name: donatorName,
            billPrice: donationValue,
            donationMessage: donationMessage
          },
        })
      }
    return (
        <Container className="donation">
            <Container className="donation__bannerContainer">
                <Image className='donation__banner' src={banner} alt="banner" />
            </Container>
            <Container className="donation__midContainer">
                <Container className="donation__infoContainer">
                    <Container className="donation__nameContainer">
                        <input className="donation__nameInput" value={donatorName} type="text" onChange={event => setDonatorName(event.target.value)} placeholder="Ingresa tu nombre" />
                    </Container>
                    <Container className="donation__priceContainer">
                        <i class="fas fa-dollar-sign donation__priceLabel"></i>
                        <input type="text" className="donation__priceInput" value={donationValue} onChange={event => valid(event.target.value)} placeholder="10000" />
                    </Container>
                    <Container className="donation__messageContainer">
                        <textarea className="donation__inputMessage" value={donationMessage} rows="2" maxlength="255" onChange={event => setDonationMessage(event.target.value)} placeholder="Ingresa tu mensaje" />
                    </Container>
                    <Form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" accept-charset="UTF-8">
                        <Form.Control name="merchantId"    type="hidden"  value="811632"   />
                        <Form.Control name="accountId"     type="hidden"  value="818735" />
                        <Form.Control name="description"   type="hidden"  value="Donación para la corporación Sílaba"  />
                        <Form.Control name="referenceCode" type="hidden"  value={referenceCode} />
                        <Form.Control name="amount"        type="hidden"  value={donationValue}   />
                        <Form.Control name="tax"           type="hidden"  value="0"  />
                        <Form.Control name="taxReturnBase" type="hidden"  value="0" />
                        <Form.Control name="currency"      type="hidden"  value="COP" />
                        <Form.Control name="signature"     type="hidden"  value={signature}  />
                        <Form.Control name="test"          type="hidden"  value="0" />
                        <Form.Control name="buyerEmail"    type="hidden"  value={user_email} />
                        <Form.Control name="payerFullName"    type="hidden"  value={donatorName} />
                        <Form.Control name="responseUrl"    type="hidden"  value="http://localhost:3000/shopResponse" />
                        <Form.Control name="confirmationUrl"    type="hidden"  value="http://localhost:3000/shopSuccesfull" />
                        {user !== null && user !== undefined ? <Form.Control name="Submit"  type="submit"  value="Hacer donación" className="donation__button" onClick={makeBill}/> : <Link to="/login"><button className="donation__button">Debes Iniciar sesión para realizar la donación</button></Link>}
                    </Form>
                </Container>
            </Container>
        </Container>
    )
}

export default Donation
