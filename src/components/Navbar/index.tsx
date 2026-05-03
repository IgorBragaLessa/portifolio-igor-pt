import { useState, useEffect } from "react";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export const NavBar = (): JSX.Element => {
  const [isWide, setIsWide] = useState(false);
  const [open, setOpen] = useState(false);

  document.title = userData.nameUser;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 991px)");

    const handleChange = () => {
      setIsWide(media.matches);
    };

    handleChange();
    media.addEventListener("change", handleChange);

    return () => media.removeEventListener("change", handleChange);
  }, []);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>

          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir menu" : "Fechar menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>

        <Flex>{isWide ? open && <NavLinks /> : <NavLinks />}</Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href="#home">
        Início
      </Button>
      <Button type="btLink" as="a" color="grey4" href="#projects">
        Projetos
      </Button>
      <Button type="btLink" as="a" color="grey4" href="#contact">
        Contato
      </Button>
      <Button type="btLink" as="a" color="grey4" href="#social-media">
        Redes sociais
      </Button>
    </NavbarLinks>
  );
};