import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../styledComponents/Button";

const ProductBox = styled.section`
  border-bottom: 2px solid gray;
  width: 800px;
  height: 300px;
`;

const ProductText = styled.section`
  padding: 0px 10px;
  width: 60%;
  height: 150px;
`;

const ProductDescription = styled.p`
  font-size: 12px;
  display: inline-block;
  padding: 5px;
  height: 50px;
`;

const ProductTitle = styled.span`
  font-weight: bold;
  width: 300px;
  height: 75px;
`;

const ProductPrice = styled.p`
  display: block;
`;

function Product(props) {
  const [amounts, setAmount] = useState(0);
  const [item, setItem] = useState({ ...props.product, amount: amounts });

  useEffect(() => {
    setItem({ ...item, amount: amounts });
    props.updateShoppingCart(item);
  }, [amounts]);

  // Amounts icm useEffect gebruik ik hier puur om de oneindige loop te voorkomen
  // Deze loop onstaat op het moment dat ik de updateShoppingCart aanroep in Component DataFetching icm setShoppingCart.
  //Niet de mooiste oplossing, na vandaag uitzoeken hoe ik dat netjes oplos

  return (
    <ProductBox>
      <Button
        color="primary"
        onClick={() => setAmount((prevAmount) => prevAmount + 1)}
      >
        Add
      </Button>
      <ProductText>
        <ProductTitle>{props.product.title}</ProductTitle>
        <ProductPrice> € {props.product.price}</ProductPrice>
        <span>{props.product.category}</span>
        <ProductDescription>{props.product.description}</ProductDescription>
      </ProductText>
      <img
        src={props.product.image}
        style={{ width: "75px", padding: "5px", float: "right" }}
        alt="product-image"
      ></img>
    </ProductBox>
  );
}

export default Product;
