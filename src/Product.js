import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { reference } from "./firebase";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Container, Image, Button } from 'react-bootstrap';

function Product(props) {
  const [{ carrito, user, items, user_id }, dispatch] = useStateValue();

  const addToCart = () => {
    let isInCart = false;
    carrito.forEach((element) => {
      if (element.id !== props.id) {
        isInCart = false;
      } else {
        isInCart = true;
        element.quantity = element.quantity + 1;

      }
    });

    if (isInCart === false) {
      var stock = 0;
      items.forEach((element) => {
        if (element.id === props.id) {
          stock = element.stock;
        }
      });
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: props.id,
          title: props.title,
          image: props.image,
          price: props.price,
          quantity: 1,
          stock: props.stock,
          category: props.category,
        },
      });

      if (user) {
        var updates = {};
        var cartData = {
          id: props.id,
          title: props.title,
          image: props.image,
          price: props.price,
          quantity: 1,
          category: props.category,
        };
        updates[
          "shopping_carts/SHPNCRT_" + user_id + "/products/" + props.id
        ] = cartData;
        reference.update(updates);
      }
    }
    props.onButtonClick(true)
  };

  return (
    <Container className="product">
      <Container className="product__info">
        <p className="product__title">{props.title}</p>
        {props.category !== "Jardinera" && (<p className="product__price">
                                              <small>$</small>
                                              <strong>{props.price}</strong>
                                            </p>)} 
      </Container>
      <Link to={"/product/" + props.id} className="product_imageContainer">
        <Image
          fluid
          src={props.category === "Libro" || props.category === "Arte" ? props.image : require(`${props.image}`)}
          alt="proudct_image"
        />
      </Link>
      <Container className="product__buttonContainer">
          {props.category === "Jardinera" && (<p className="product__buttonText" style={{marginTop: "30px", fontSize: "25px", cursor: "pointer"}} onClick={() => (window.location.href = "https://forms.gle/U7QMGp2NCpeUDBZP8")}>ver más </p>) }
          {props.category !== "Jardinera" && (  <Button className="product__button" onClick={addToCart}>
                                                  <p className="product__buttonText">Añadir al carrito </p> 
                                                  <ShoppingCartIcon className="product__shoppingCart" /> 
                                                </Button>)}
      </Container>
    </Container>
  );
}

export default Product;
