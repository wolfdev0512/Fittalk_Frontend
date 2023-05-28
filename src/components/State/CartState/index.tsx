import React from "react";
// component
import { Row } from "components/Layout";
// styled component
import { IconWrapper, CartCounts, CartWrapper } from "./CartState.style";
// assets
import { CartIcon } from "assets/icon";

// ---------------------------------------------------------
const CartState = () => {
  return (
    <CartWrapper>
      <Row alignItems="center">
        <IconWrapper>
          <CartIcon />
        </IconWrapper>
        <CartCounts fontSize={16}>0</CartCounts>
      </Row>
    </CartWrapper>
  );
};
export default CartState;
