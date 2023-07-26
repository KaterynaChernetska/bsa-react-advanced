import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
