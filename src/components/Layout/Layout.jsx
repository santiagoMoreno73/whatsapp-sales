import React from "react";

// styled
import { SLayout, SMain, SSignIn } from "./Layout.style";

// components
import SideBar from "../SideBar/SideBar";

// router
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <SLayout>
      {location.pathname === "/" ? (
        <SSignIn>{children}</SSignIn>
      ) : (
        <>
          <SideBar />
          <SMain>{children}</SMain>
        </>
      )}
    </SLayout>
  );
};

export default Layout;
