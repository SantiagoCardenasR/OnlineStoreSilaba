import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { reference } from "./firebase";

import { Container, Image, Button } from 'react-bootstrap';

function CheckoutProduct({
  id,
  title,
  category,
  image,
  price,
  quantity,
  stock,
}) {
  const [{ carrito, user, user_id }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });

    if (user) {
      reference
        .child("shopping_carts/SHPNCRT_" + user_id + "/products/" + id)
        .remove();
    }
  };

  const changeQuantity = (itemId, itemQuantity) => {
    if (itemQuantity <= stock && itemQuantity > 0) {
      dispatch({
        type: "CHANGE_QUANTITY",
        data: {
          user: user,
          userId: user_id,
          itemId: itemId,
          itemQuantity: parseInt(itemQuantity),
        },
      });
      document.getElementById(itemId).value = itemQuantity;
    } else {
      if (itemQuantity > stock) {
        document.getElementsByClassName(
          "checkoutProduct__quantity"
        )[0].value = stock;
      }

      if (itemQuantity <= 0) {
        document.getElementsByClassName("checkoutProduct__quantity")[0].value =
          "1";
      }
    }
  };

  return (
    <Container className="checkoutProduct"> 
        <Image
          src={category === "Libro" ? image : require(`${image}`)}
          alt="product_image"
          className="checkoutProduct__image"
        />
        <Container className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <p className="checkoutProduct__quantityLabel">Cantidad del producto</p>
          <input
            id={id}
            className="checkoutProduct__quantity"
            type="number"
            defaultValue={quantity}
            onChange={(event) => changeQuantity(id, event.target.value)}
          ></input>
          <Button onClick={removeFromCart}>Eliminar</Button>
        </Container>
    </Container>
  );
}

export default CheckoutProduct;
