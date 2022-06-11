import React, { useState, useContext, useRef } from "react";

import { ThemeContext } from "../../App";

import {
  SLogo,
  SSearchIcon,
  SSideBar,
  SSearch,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
  SSidebarButton,
  SLogoOpen,
} from "./SideBar.style";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineApartment,
  AiOutlineSetting,
  AiOutlineLeft,
} from "react-icons/ai";

import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const dataOptions = [
  {
    id: 1,
    label: "Inicio",
    icon: <AiOutlineHome />,
    to: "/home",
    notification: 4,
  },
  {
    id: 2,
    label: "Categorias",
    icon: <MdOutlineAnalytics />,
    to: "/categories",
    notification: 0,
  },
  {
    id: 3,
    label: "Nosotros",
    icon: <BsPeople />,
    to: "/about",
    notification: 2,
  },
  {
    id: 4,
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/list",
    notification: 1,
  },
];

const secondDataOptions = [
  { id: 1, label: "Configuración", icon: <AiOutlineSetting />, to: "/" },
  { id: 2, label: "Cerrar sesión", icon: <MdLogout />, to: "/" },
];

const SideBar = () => {
  const searchRef = useRef(null);
  const { theme, setTheme } = useContext(ThemeContext);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  // location
  const { pathname } = useLocation();

  const handleSearchClick = () => {
    if (!sideBarOpen) {
      setSideBarOpen(true);
      searchRef.current.focus();
    } else {
    }
  };

  return (
    <SSideBar isOpen={sideBarOpen}>
      <>
        <SSidebarButton
          isOpen={sideBarOpen}
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      {sideBarOpen ? (
        <SLogoOpen>
          <img src="https://www.megatiendas.co/static/media/logo-megatiendas.7b88c884.png" />
        </SLogoOpen>
      ) : (
        <SLogo isOpen={sideBarOpen}>
          <img src="https://adminlanding.megatiendas.co/img/logo_megatiendas.f3c02603.png" />
        </SLogo>
      )}
      <SSearch
        onClick={handleSearchClick}
        style={!sideBarOpen ? { width: `fit-content` } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          placeholder="Buscar ..."
          style={!sideBarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />
      {dataOptions.map(({ id, icon, label, to, notification }) => (
        <SLinkContainer key={`key-${id}`} isActive={pathname === to}>
          <SLink to={to} style={!sideBarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sideBarOpen && (
              <>
                <SLinkLabel>{label}</SLinkLabel>
                {!!notification && (
                  <SLinkNotification>{notification}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondDataOptions.map(({ icon, label, id, to }) => (
        <SLinkContainer key={`key-${id}`}>
          <SLink to={to} style={!sideBarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sideBarOpen && <SLinkLabel>{label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider>
        <STheme>
          {sideBarOpen && <SThemeLabel>Modo Oscuro</SThemeLabel>}
          <SThemeToggler
            isActive={theme === "dark"}
            onClick={() =>
              setTheme((theme) => (theme === "light" ? "dark" : "light"))
            }
          >
            <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
          </SThemeToggler>
        </STheme>
      </SDivider>
    </SSideBar>
  );
};

export default SideBar;
