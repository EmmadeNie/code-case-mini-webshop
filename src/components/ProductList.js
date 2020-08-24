import React from "react";
import Product from "./Product";
import styled from "styled-components";

const ProductListBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: center;
`;

function ProductList(props) {
  return (
    <ProductListBox>
      {props.products.map((product) => (
        <Product
          product={product}
          updateShoppingCart={props.updateShoppingCart}
          key={product.id}
        />
      ))}
    </ProductListBox>
  );
}

export default ProductList;
