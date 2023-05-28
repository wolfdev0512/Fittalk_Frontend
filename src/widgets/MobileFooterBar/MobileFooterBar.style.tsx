// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// ------------------------------------------
export const FooterBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  & > *:not(:last-child) {
    position: relative;
    &::before {
      content: " ";
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: ${themeGet("colors.black.dark")};
      opacity: 0.2;
    }
  }
`;
export const MobileMenuItem = styled.div`
  cursor: pointer;
  padding: 0 5px;
  background: ${themeGet("colors.primary.regular")};
  font-size: 14px;
  font-weight: 700;
  color: ${themeGet("colors.white")};
  height: 70px;
`;
