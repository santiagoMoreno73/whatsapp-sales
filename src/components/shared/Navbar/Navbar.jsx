import React from "react";

// styled
import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  Wrapper,
} from "./Navbar_style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContainer>Mega</LogoContainer>
        <Menu>
          <MenuItem>
            <MenuItemLink>Home</MenuItemLink>
            <MenuItemLink>Perfil</MenuItemLink>
            <MenuItemLink>Categorias</MenuItemLink>
            <MenuItemLink>Home</MenuItemLink>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
