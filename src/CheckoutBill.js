import React from "react";
import md5 from 'md5';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import "./CheckoutBill.css";
import banner from "./images/Carrito_banner.png";
import { getTotalCartItems } from "./reducer";
import { getCartTotal } from "./reducer";
import { Container, Button, Image} from 'react-bootstrap';

function CheckoutBill() {
  const [{ user, carrito, shippingInfo, user_id, user_email }, dispatch] = useStateValue();
  const shippingPrice = 6000;
  const randomNumber = Math.floor(Math.random() * 10000);
  const referenceCode = user_id + randomNumber;
  const amount = getCartTotal(carrito) + shippingPrice;
  const signature = md5("Nu3I8fJGp7qRPW6H35349Jc5i5~811632~"+referenceCode+"~"+amount+"~COP");

  const makeBill = () => {
    dispatch({
      type: "MAKE_BILL",
      billData: {
        carrito: carrito,
        referenceCode: referenceCode,
        buyerId: user_id,
        buyer_email: user_email,
        shippingInfo: shippingInfo,
        billPrice: amount,
      },
    })
  }

  return (
    <Container className="checkoutBill"> 
       <Container className="heckoutBill__bannerContainer">
         <Image fluid className="checkoutBill__banner" src={banner} alt="ad" />
       </Container>
       <Container className="heckoutBill__allContainers">
         <Container className="checkoutBill__left">
           <h2>¿Cómo quieres recibir tu compra?</h2>
           <h4>Domicilio</h4>
           <Container className="checkoutBill__shippingCard">
             <Container className="checkoutBill__ShippingInfo">
               <h3>{shippingInfo.address1}</h3>
               <p>{shippingInfo.address2 + "-" + shippingInfo.city}</p>
             </Container>
             <Container className="checkoutBill__modifyInfo">
               <Link className="checkoutBill__modifyLink" to="/checkout">
                 <p>Modificar ubicación</p>
               </Link>
             </Container>
           </Container>
         </Container>
         <Container className="checkoutBill__right">
           <Container className="checkoutBill__billInfo">
             <Container className="checkoutBill__billTitle">
               <h4>Resumen de la compra</h4>
             </Container>
             <Container className="checkoutBill__BillPrice">
               <Container className="checkoutBill__productsPrice">
                 <p>producto(s):</p>
                 <h2>{getTotalCartItems(carrito)}</h2>
               </Container>
               <Container className="checkoutBill__itemsList">
                 {carrito?.map((item) => {
                   return (
                     <Container className="checkoutBill__itemInfo">
                       <p>{item.title}:</p>
                       {
                         <CurrencyFormat
                           renderText={(value) => (
                             <>
                               <h2>
                                 <strong>{`${value}`}</strong>
                               </h2>
                             </>
                           )}
                           decimalScale={2}
                           value={item.quantity * item.price}
                           displayType={"text"}
                           thousandSeparator={true}
                           prefix={"COP$"}
                         />
                       }
                     </Container>
                   );
                 })}
               </Container>
               <Container className="checkoutBill__shippingPrice">
                 <p>Costo de envío:</p>
                 {
                   <CurrencyFormat
                     renderText={(value) => (
                       <>
                         <h2 className="checkoutBill__finalShippingPrice">
                           <strong>{`${value}`}</strong>
                         </h2>
                       </>
                     )}
                     decimalScale={2}
                     value={shippingPrice}
                     displayType={"text"}
                     thousandSeparator={true}
                     prefix={"COP$"}
                   />
                 }
               </Container>
             </Container>
             <Container className="checkoutBill__priceTotal">
               <p>Total a pagar:</p>
               {
                 <CurrencyFormat
                   renderText={(value) => (
                     <>
                       <h2 className="checkoutBill__finalPrice">
                         <strong>{`${value}`}</strong>
                       </h2>
                     </>
                   )}
                   decimalScale={2}
                   value={getCartTotal(carrito) + shippingPrice}
                   displayType={"text"}
                   thousandSeparator={true}
                   prefix={"COP$"}
                 />
               }
             </Container>
           </Container>
           <Container className="checkoutBill__paymentButtonContainer">
             <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/" accept-charset="UTF-8">
               <input name="merchantId"    type="hidden"  value="811632"   />
               <input name="accountId"     type="hidden"  value="818735" />
               <input name="description"   type="hidden"  value="Compra de artículos Ecommerce Sílaba"  />
               <input name="referenceCode" type="hidden"  value={referenceCode} />
               <input name="amount"        type="hidden"  value={amount}   />
               <input name="tax"           type="hidden"  value={(amount * 19) / 100 }  />
               <input name="taxReturnBase" type="hidden"  value={(amount * 10) / 100 } />
               <input name="currency"      type="hidden"  value="COP" />
               <input name="signature"     type="hidden"  value={signature}  />
               <input name="test"          type="hidden"  value="1" />
               <input name="buyerEmail"    type="hidden"  value={user_email} />
               <input name="shippingAddress"    type="hidden"  value={shippingInfo.address1 + " " + shippingInfo.address2} />
               <input name="shippingCity"    type="hidden"  value={shippingInfo.city} />
               <input name="shippingCountry"    type="hidden"  value="CO" />
               <input name="payerFullName"    type="hidden"  value={shippingInfo.name + " " + shippingInfo.lastName} />
               <input name="payerDocument"    type="hidden"  value={user_id} />
               <input name="mobilePhone"    type="hidden"  value={shippingInfo.phone} />
               <input name="responseUrl"    type="hidden"  value="/shopResponse" />
               <input name="confirmationUrl"    type="hidden"  value="/shopSuccesfull" />
               {user !== null && user !== undefined ? <input name="Submit" type="submit"  value="Pagar" className="mobileCheckoutBill__paymentButton" onClick={makeBill}/> : "Inicia Sesión para realizar la compra"}
             </form>
           </Container>
         </Container>
        </Container>
        
    </Container>
  );
}

export default CheckoutBill;