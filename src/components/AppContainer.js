import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import StoreHeader from "../containers/StoreHeaderContainer";

function DataFetching() {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  //fetch data from API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //update shoppingCart after clicking "add to shopping Cart"
  const addItem = (item) => setShoppingCart(shoppingCart.concat(item));

  const updateAmount = (item) => {
    const updatedShoppingCart = shoppingCart.map((itemInCart) => {
      if (itemInCart.id === item.id) {
        const updatedItem = { ...itemInCart };
        updatedItem.amount = updatedItem.amount + 1;
        return updatedItem;
      } else {
        return itemInCart;
      }
    });
    setShoppingCart(updatedShoppingCart);
  };

  const updateShoppingCart = (item) => {
    if (shoppingCart.some((itemInCart) => itemInCart.id === item.id)) {
      updateAmount(item);
    } else {
      addItem(item);
    }
  };

  //Emtpy shoppingCart after clicking "empty shoppingCart"
  const emptyShoppingCart = () => setShoppingCart([]);

  return (
    <div>
      <StoreHeader
        shoppingCart={shoppingCart}
        emptyShoppingCart={emptyShoppingCart}
      />
      <ProductList
        products={products}
        updateShoppingCart={updateShoppingCart}
      />
    </div>
  );
}

export default DataFetching;
