import React from "react";
// component
import { Row } from "components/Layout";
// hoc
import { useLinkItem } from "components/hoc";
// styled component
import { FooterBarWrapper, MobileMenuItem } from "./MobileFooterBar.style";
// assets
import { AccountIcon, RewardsIcon, OrderIcon, LocationIcon } from "assets/icon";

// ------------------------------------------------------

// Genereted Componentby HOC

const MenuItem = useLinkItem(MobileMenuItem);

export default function index() {
  return (
    <FooterBarWrapper>
      <Row
        display="grid"
        templateCol="1fr 1fr 1fr 1fr"
        className="mobileMenuItem"
      >
        <MenuItem
          title="Account"
          icon={<AccountIcon.Account iColor="white" iSize={{ x: 20, y: 22 }} />}
          iconGaping={5}
          iconDirection="column"
          alignHorizontal="center"
        />
        <MenuItem
          title="My Orders"
          icon={<OrderIcon iColor="white" iSize={{ x: 22, y: 22 }} />}
          iconGaping={5}
          iconDirection="column"
          alignHorizontal="center"
        />
        <MenuItem
          title="Rewards"
          icon={<RewardsIcon.Program iColor="white" iSize={{ x: 25, y: 25 }} />}
          iconGaping={5}
          iconDirection="column"
          alignHorizontal="center"
        />
        <MenuItem
          title="Locations"
          icon={<LocationIcon iColor="white" iSize={{ x: 20, y: 22 }} />}
          iconGaping={5}
          iconDirection="column"
          alignHorizontal="center"
        />
      </Row>
    </FooterBarWrapper>
  );
}
