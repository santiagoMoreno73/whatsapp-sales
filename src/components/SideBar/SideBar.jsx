import React, { useState, useContext } from "react";

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

const dataOptions = [
  { id: 1, label: "Home", icon: <AiOutlineHome />, to: "/", notification: 4 },
  {
    id: 2,
    label: "Statistics",
    icon: <MdOutlineAnalytics />,
    to: "/",
    notification: 0,
  },
  { id: 3, label: "Home", icon: <BsPeople />, to: "/", notification: 2 },
  {
    id: 4,
    label: "Home",
    icon: <AiOutlineApartment />,
    to: "/",
    notification: 1,
  },
];

const secondDataOptions = [
  { id: 1, label: "Settings", icon: <AiOutlineSetting />, to: "/" },
  { id: 2, label: "Logout", icon: <MdLogout />, to: "/" },
];

const SideBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <SSideBar>
      <>
        <SSidebarButton
          isOpen={sideBarOpen}
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img />
      </SLogo>
      <SSearch>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input placeholder="Search ..." />
      </SSearch>
      <SDivider />
      {dataOptions.map(({ id, icon, label, to, notification }) => (
        <SLinkContainer key={`key-${id}`}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
            {!!notification && (
              <SLinkNotification>{notification}</SLinkNotification>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      {secondDataOptions.map(({ icon, label, id, to }) => (
        <SLinkContainer key={`key-${id}`}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider>
        <STheme>
          <SThemeLabel>Dark Mode</SThemeLabel>
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
