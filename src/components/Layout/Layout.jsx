import React from "react";

import SideBar from "../SideBar/SideBar";
import { SLayout, SMain } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <SideBar />
      <SMain>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
