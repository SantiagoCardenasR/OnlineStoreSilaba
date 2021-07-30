import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct";
import { getCartTotal } from "./reducer";
import { getTotalCartItems } from "./reducer";
import { useHistory } from "react-router-dom";
import banner from "./images/Carrito_banner.png";

import { Container, Image, Button } from 'react-bootstrap';

function Checkout() {
  const [{ user, carrito, shippingInfo }, dispatch] = useStateValue();
  const history = useHistory();
  const [name, setName] = useState(shippingInfo.name);
  const [lastName, setLastName] = useState(shippingInfo.lastName);
  const [city, setCity] = useState(shippingInfo.city);
  const [address1, setAddress1] = useState(shippingInfo.address1);
  const [address2, setAddress2] = useState(shippingInfo.address2);
  const [phone, setPhone] = useState(shippingInfo.phone);

  const payment = () => {
    dispatch({
      type: "ADD_SHIPPING_DATA",
      shippingInfo: {
        name: name,
        lastName: lastName,
        city: city,
        address1: address1,
        address2: address2,
        phone: phone,
      },
    });
    history.push("/checkoutBill");
  };

  return (
    <Container className="checkout">
        <Container className="checkout__left">
          <Image fluid className="checkout__ad" src={banner} alt="ad" />
          {carrito?.length === 0 ? (
            <Container className="checkout__infoContainer">
              <h2 className="checkout__title">
                Tu carrito de compras está vacío
              </h2>
              <hr className="checkout__Containerider"></hr>
              <p className="checkout__noItemMessage">
                No tienes ítems en tu carrito de compras. Para comprar un elemento
                da click al botón "Agregar al carrito" debajo de cualquier ítem
              </p>
            </Container>
          ) : (
            <Container className="checkout__middleContainer">
              <Container className="checkout__infoContainer">
                <h2 className="checkout__title">Tu carrito de compras</h2>
                <hr className="checkout__Containerider"></hr>
                {carrito?.map((item) => (
                  <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    stock={item.stock}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </Container>

              <Container className="checkout__rightContainer">
                <Container className="checkout__shippingContainer">
                  <h2>Datos de envío</h2>

                  <Container className="checkout__nameLastNameContainer">
                    {/* <Container className="checkout__nameContainer"> */}
                      <p>Nombre*</p>
                      <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="checkout__input"
                      ></input>
                    {/* </Container> */}

                    {/* <Container className="checkout__lastNameContainer"> */}
                      <p>Apellido*</p>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="checkout__input"
                      ></input>
                    {/* </Container> */}
                  </Container>

                  <Container className="checkout__cityContainer">
                    <p>Ciudad*</p>
                    <select
                      value={city}
                      onChange={(event) => setCity(event.target.value)}
                      className="checkout__city"
                    >
                      <option></option>
                      <option>Aguachica Cesar</option>
                      <option>Apartadó Antioquia</option>
                      <option>Arauca</option>
                      <option>Armenia Quindío</option>
                      <option>Barrancabermeja Santander</option>
                      <option>Barranquilla Atlántico</option>
                      <option>Bello Antioquia</option>
                      <option>Bogotá Distrito Capital</option>
                      <option>Bucaramanga Santander</option>
                      <option>Buenaventura Valle del Cauca</option>
                      <option>Buga Valle del Cauca</option>
                      <option>Cali Valle del Cauca</option>
                      <option>Cartago Valle del Cauca</option>
                      <option>Cartagena Bolívar</option>
                      <option>Caucasia Antioquia</option>
                      <option>Cereté Córdoba</option>
                      <option>Chia Cundinamarca</option>
                      <option>Ciénaga Magdalena</option>
                      <option>Cúcuta Norte de Santander</option>
                      <option>Dosquebradas Risaralda</option>
                      <option>Duitama Boyacá</option>
                      <option>Envigado Antioquia</option>
                      <option>Facatativá Cundinamarca</option>
                      <option>Florencia Caqueta</option>
                      <option>Floridablanca Santander</option>
                      <option>Fusagasugá Cundinamarca</option>
                      <option>Girardot Cundinamarca</option>
                      <option>Girón Santander</option>
                      <option>Ibagué Tolima</option>
                      <option>Ipiales Nariño</option>
                      <option>Itagüí Antioquia</option>
                      <option>Jamundí Valle del Cauca</option>
                      <option>Lorica Córdoba</option>
                      <option>Los Patios Norte de Santander</option>
                      <option>Magangué Bolivar</option>
                      <option>Maicao Guajira</option>
                      <option>Malambo Atlántico</option>
                      <option>Manizales Caldas</option>
                      <option>Medellín Antioquia</option>
                      <option>Melgar Tolima</option>
                      <option>Montería Córdoba</option>
                      <option>Neiva Huila</option>
                      <option>Ocaña Norte de Santander</option>
                      <option>Paipa, Boyacá</option>
                      <option>Palmira Valle del Cauca</option>
                      <option>Pamplona Norte de Santander</option>
                      <option>Pasto Nariño</option>
                      <option>Pereira Risaralda</option>
                      <option>Piedecuesta Santander</option>
                      <option>Pitalito Huila</option>
                      <option>Popayán Cauca</option>
                      <option>Quibdó Choco</option>
                      <option>Riohacha Guajira</option>
                      <option>Rionegro Antioquia</option>
                      <option>Sabanalarga Atlántico</option>
                      <option>Sahagún Córdoba</option>
                      <option>San Andrés Isla</option>
                      <option>Santa Marta Magdalena</option>
                      <option>Sincelejo Sucre</option>
                      <option>Soacha Cundinamarca</option>
                      <option>Sogamoso Boyacá</option>
                      <option>Soledad Atlántico</option>
                      <option>Tibú Norte de Santander</option>
                      <option>Tuluá Valle del Cauca</option>
                      <option>Tumaco Nariño</option>
                      <option>Tunja Boyacá</option>
                      <option>Turbo Antioquia</option>
                      <option>Valledupar Cesar</option>
                      <option>Villa de leyva</option>
                      <option>Villa del Rosario Norte de Santander</option>
                      <option>Villavicencio Meta</option>
                      <option>Yopal Casanare</option>
                      <option>Yumbo Valle del Cauca</option>
                      <option>Zipaquirá Cundinamarca</option>
                    </select>
                  </Container>

                  <Container className="checkout__addressContainer">
                    <p>Dirección Principal*</p>
                    <input
                      value={address1}
                      onChange={(event) => setAddress1(event.target.value)}
                      type="text"
                      className="checkout__input"
                    ></input>
                    <p>Casa, edificio u Oficina</p>
                    <input
                      value={address2}
                      onChange={(event) => setAddress2(event.target.value)}
                      type="text"
                      className="checkout__input"
                    ></input>
                  </Container>

                  <Container className="checkout__phoneContainer">
                    <p>Número de celular</p>
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      type="number"
                      className="checkout__input"
                    ></input>
                  </Container>
                </Container>

                {carrito.length > 0 && (
                  <Container className="checkout__right">
                    <Container className="subtotal">
                      <CurrencyFormat
                        renderText={(value) => (
                          <>
                            <p className="subtotal__price">
                              Subtotal ({getTotalCartItems(carrito)} productos):{" "}
                              <strong>{`${value}`}</strong>
                            </p>
                          </>
                        )}
                        decimalScale={2}
                        value={getCartTotal(carrito)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      <Button onClick={payment}>Seguir al pago</Button>
                    </Container>
                  </Container>
                )}
              </Container>
            </Container>
          )}
        </Container>
    </Container>
  );
}

export default Checkout;
