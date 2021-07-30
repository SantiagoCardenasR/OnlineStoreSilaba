import React, {useState} from "react";
import { useParams, Redirect } from "react-router-dom";
import "./Store.css";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import NotificationPortal from "./NotificationPortal"

import coffeeBanner from "./images/CafeBanner.gif";
import booksBanner from "./images/libreriaBanner.gif";
import storeBanner from "./images/mainBanner.gif";
import ArtBanner from "./images/arteBanner.gif";
import JardineraBanner from "./images/Jardinera.gif"

import { Container, Image } from 'react-bootstrap';

function Store({ category }) {
  const [{ items }] = useStateValue();
  const [showPortal, setShowPortal] = useState(false)
  let { search } = useParams();

  const portalShow = (pShowPortal) => {
    setShowPortal(pShowPortal)
  }

  return ( 
    <Container className="store">
          <Container className="store__banner" style={{maxHeight: "50%", maxWidth: "100%"}}>
            <Image
              fluid
              src={
                category === "Cafe" && category !== undefined
                  ? coffeeBanner
                  : category === "Libro" && category !== undefined
                  ? booksBanner
                  : category === "Art" && category !== undefined
                  ? ArtBanner
                  : category === "Jardinera" && category !== undefined
                  ? JardineraBanner
                  : search !== undefined
                  ? storeBanner : ""
              }
              alt="banner"
            />
          </Container>
          <Container className="store__items">
            {items.map((value, index) => {
              if (search !== undefined && search !== null && search !== "") {
                if (
                  value.name.includes(search) ||
                  value.description.includes(search)
                ) {
                  return (
                    <Product
                      key={value.id}
                      id={value.id}
                      title={value.name}
                      image={value.image}
                      category={value.category}
                      price={value.price}
                      onButtonClick = {portalShow}
                    />
                  );
                }
              } else {
                if (
                  category !== undefined &&
                  category !== null &&
                  category !== ""
                ) {
                  if (value.category === category) {
                      return (
                        <Product
                          key={value.id}
                          id={value.id}
                          title={value.name}
                          image={value.image}
                          category={value.category}
                          price={value.price}
                          onButtonClick = {portalShow}
                        />
                      );
                  }
                } else {
                  return <Redirect to="/" />;
                }
              }
            })}
          </Container>
          <NotificationPortal
            visible = {showPortal}
            onPortalClick = {portalShow}
          />
    </Container>
  );
}

export default Store;
