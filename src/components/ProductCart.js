import React from "react";
import styled from "styled-components";
import CartIcon from "../img/shopping-cart.png";
import Button from "../styledComponents/Button";

//local Styled Components
const ProductCartBox = styled.section`
  float: right;
  position: fixed;
  top: 25px;
  right: 25px;
`;

const ProductCartItemTotal = styled.h1`
  text-size: 12px;
`;

const ProductCartPriceTotal = styled.h1`
  text-size: 12px;
`;

function ProductCart(props) {
  //total amount
  const totalAmountOfItemsPerProduct = props.shoppingCart.map((item) => {
    return item.amount;
  });

  const totalAmount = totalAmountOfItemsPerProduct.reduce(function (a, b) {
    return a + b;
  }, 0);

  //total price
  const arrayTotalPricePerProduct = props.shoppingCart.map((item) => {
    return item.amount * item.price;
  });
  const totalPrice = arrayTotalPricePerProduct.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <ProductCartBox>
      Shopping Cart
      <img
        src={CartIcon}
        alt="Cart Icon"
        style={{ width: "36px", height: "auto" }}
      />
      <ProductCartItemTotal>total amount: {totalAmount}</ProductCartItemTotal>
      <ProductCartPriceTotal>total price: {totalPrice}</ProductCartPriceTotal>
      <Button onClick={props.emptyShoppingCart}>Empty Shopping Cart</Button>
    </ProductCartBox>
  );
}

export default ProductCart;
