import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import "./styles.css";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
