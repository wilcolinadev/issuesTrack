import React, { useState } from "react";
import { Burger } from "./HamburgerStyles";
import HamburgerModal from "./HamburgerModal/HamburgerModal";

const Hamburger: React.FC = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  return (
    <React.Fragment>
      <Burger
        open={isHamburgerActive}
        onClick={() => setIsHamburgerActive(!isHamburgerActive)}
        media={'700px'}
      >
        <div />
        <div />
        <div />
      </Burger>

      <HamburgerModal open={isHamburgerActive} />
    </React.Fragment>
  );
};

export default Hamburger;
