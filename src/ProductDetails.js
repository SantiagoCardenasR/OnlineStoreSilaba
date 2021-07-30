import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useStateValue } from "./StateProvider";
import banner from "./images/mainBanner.gif";
import { reference } from "./firebase";
import { Container, Image, Button } from 'react-bootstrap';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function ProductDetails() {
  const [{ carrito, user, items, user_id }, dispatch] = useStateValue();
  let { productId } = useParams();
  let title = "";
  let image = "";
  let price = 0;
  let category = "";

  items.map((value, index) => {
    if (value.id === productId) {
      title = value.name;
      image = value.image;
      price = value.price;
      category = value.category;
    }
  });

  const addToCart = () => {
    let isInCart = false;
    carrito.forEach((element) => {
      if (element.id !== productId) {
        isInCart = false;
      } else {
        isInCart = true;
        element.quantity = element.quantity + 1;
      }
    });

    if (isInCart === false) {
      var stock = 0;
      items.forEach((element) => {
        if (element.id === productId) {
          stock = element.stock;
        }
      });
      dispatch({
        type: "ADD_TO_CART",
        item: {
          id: productId,
          title: title,
          image: image,
          price: price,
          category: category,
          quantity: 1,
          stock: stock,
        },
      });

      if (user) {
        var updates = {};
        var cartData = {
          id: productId,
          title: title,
          image: image,
          price: price,
          category: category,
          quantity: 1,
        };
        updates[
          "shopping_carts/SHPNCRT_" + user_id + "/products/" + productId
        ] = cartData;
        reference.update(updates);
      }
    }
  };

  return (
    <Container className="productDetails"> 
        <Container className="productDetails__banner">
          <Image fluid src={banner}/>
        </Container>
        <Container className="productDetails__detailsContainer">
          <Container className="productDetails__leftContainer">
            {items.map((value) => {
              if (value.id === productId) {
                return (
                  <Image
                    fluid
                    src={category === "Libro" ? image : require(`${value.image}`)}
                    style={{objectFit: "contain"}}
                  />
                );
              }
            })}
          </Container>
          <Container className="productDetails__rightContainer">
            {items.map((value) => {
              if (value.id === productId) {
                return (
                  <Container className="productDetails__productInfo">
                    <p className="productDetails__productName">{value.name}</p>
                    {category !== "Jardinera" && (<p className="productDetails__productPrice">${value.price}</p>)}
                    {category === "Jardinera" && (<p className="productDetails__productDescription" style={{display: "flex"}}>
                                                    {value.description}
                                                  </p>)}
                    {category !== "Jardinera" && (<p className="productDetails__productDescription">
                      {value.description}
                    </p>)}
                    <Container className="productDetails__buttonContainer">
                    {category !== "Jardinera" && (<Button
                        type="button"
                        onClick={addToCart}
                        className="productDetails__addToCart"
                      >
                        <ShoppingCartIcon />
                      </Button>) }

                      {category === "Jardinera" && (<p className="product__buttonText" style={{marginTop: "30px", fontSize: "25px", cursor: "pointer", display: "flex"}} onClick={() => (window.location.href = "https://forms.gle/U7QMGp2NCpeUDBZP8")}>Llenar formulario </p>) }

                    </Container>
                  </Container>
                );
              }
            })}
          </Container>
        </Container>
    </Container>
  );
}
export default ProductDetails;
