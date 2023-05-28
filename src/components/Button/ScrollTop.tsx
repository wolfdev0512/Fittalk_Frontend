import React, { useEffect, useState } from "react";
// component
import { Row } from "components/Layout";
// styled system
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
// icons
import { IoIosArrowUp } from "react-icons/io";

// styeld component
const ScrollButtonWrapper = styled.div<{ showButton: boolean }>`
  position: fixed;
  width: 44px;
  height: 44px;
  background: ${themeGet("colors.primary.regular")};
  color: ${themeGet("colors.white")};
  text-transform: uppercase;
  text-align: center;
  bottom: 25px;
  right: 25px;
  border-radius: ${({ theme }) => theme.radii.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: ${({ showButton }) => (showButton ? 100 : 0)};
  transform: scale(${({ showButton }) => (showButton ? 1 : 0)});
  transition: all 0.4s ease-in;
  z-index: 100;
  font-size: 12px;
`;

// --------------------------------------------------------

const ScrollTop = () => {
  const [enable, setEnable] = useState(false);
  let timeout;

  const handleOnScroll = (isMounted) => {
    // Show the button When scroll is over 20 px from top
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      isMounted && setEnable(true);

      // If there is no moving , It hides the button
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isMounted && setEnable(false);
      }, 2000);
    } else {
      // If not, Hide
      isMounted && setEnable(false);
    }
  };

  // Scroll to top of window
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted)
      window.addEventListener("scroll", () => handleOnScroll(isMounted));
    return () => {
      isMounted = false;
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);

  return (
    <>
      <ScrollButtonWrapper onClick={scrollToTop} showButton={enable}>
        <Row
          alignItems="center"
          justifyContent="center"
          gap={-3}
          flexDirection="column"
        >
          <IoIosArrowUp size={20} />
        </Row>
      </ScrollButtonWrapper>
    </>
  );
};
export default ScrollTop;
