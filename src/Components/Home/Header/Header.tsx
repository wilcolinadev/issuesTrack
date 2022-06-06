import React from "react";
import Button from "./Button/Button";
import headerImage from "../../../assets/headerImage.svg";
import { HeaderImage, HeaderTitle, GridWrapper } from "./HeaderStyles";
import AppDescription from "./AppDescription/AppDescription";

const Header: React.FC = () => (
  <GridWrapper>
    <div>
      <HeaderTitle>Help your company to solve some problems</HeaderTitle>
      <AppDescription />
      <Button />
    </div>

    <div style={{ textAlign: "center" }}>
      <HeaderImage src={headerImage} alt="Team Work at Issues Track" />
    </div>
  </GridWrapper>
);

export default Header;
