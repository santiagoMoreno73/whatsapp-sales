import React from "react";

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
} from "./SideBar.style";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineApartment,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
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

const SideBar = () => {
  return (
    <SSideBar>
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
            <SLinkNotification>{notification}</SLinkNotification>
          </SLink>
        </SLinkContainer>
      ))}
    </SSideBar>
  );
};

export default SideBar;
