import React from "react";
import styled from "styled-components";
import ProductCart from "../components/ProductCart";

//local styled Components
const StoreHeaderBox = styled.section`
  display: flex;
  height: 100px;
  flex-wrap: wrap;
  width: 1300px;
`;

function StoreHeader(props) {
  return (
    <StoreHeaderBox>
      <ProductCart
        shoppingCart={props.shoppingCart}
        emptyShoppingCart={props.emptyShoppingCart}
      />
    </StoreHeaderBox>
  );
}

export default StoreHeader;
