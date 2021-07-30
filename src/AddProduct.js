import React, { useState } from "react";
import { reference } from "./firebase";
import "./AddProduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const addnewProduct = () => {
    var actualItems = {};
    var itemData = {
      id: id,
      name: name,
      image: image,
      category: category,
      price: parseInt(price),
      description: description,
    };
    actualItems["products/PRDCT_" + id] = itemData;
    reference.update(actualItems);
  };

  return (
    <div className="addProduct">
      <div className="addProduct__id">
        <p>Id del producto</p>
        <input
          type="text"
          onChange={(event) => setId(event.target.value)}
        ></input>
      </div>
      <div className="addProduct__name">
        <p>Nombre del producto</p>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div className="addProduct__image">
        <p>Ruta de la imágen del producto</p>
        <input
          type="text"
          onChange={(event) => setImage(event.target.value)}
        ></input>
      </div>
      <div className="addProduct__price">
        <p>Precio del producto</p>
        <input
          type="number"
          onChange={(event) => setPrice(event.target.value)}
        ></input>
      </div>

      <div className="addProduct__price">
        <p>Categoría del producto</p>
        <input
          type="text"
          onChange={(event) => setCategory(event.target.value)}
        ></input>
      </div>

      <div className="addProduct__price">
        <p>Stock del producto</p>
        <input
          type="number"
          onChange={(event) => setStock(event.target.value)}
        ></input>
      </div>

      <div className="addProduct__description">
        <p>Descripción del producto</p>
        <input
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
      </div>
      <div className="addProduct__button">
        <button onClick={addnewProduct}>Añadir producto</button>
      </div>
    </div>
  );
}

export default AddProduct;
