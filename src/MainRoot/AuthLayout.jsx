import React from "react";
import Logo from "../Componentes/Logo/Logo";
import { Outlet } from "react-router";

import Container from "../Componentes/Container/Container";

const AuthLayout = () => {
  return (
    <div>
      <Logo></Logo>
      <Container>
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          <div className="flex-1 w-full px-6 py-10">
            <Outlet></Outlet>
          </div>
          <div className="flex-1 w-full hidden lg:flex items-center justify-center ">
            <img
              className="w-3/4 max-w-md object-contain"
              src={registerImage}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthLayout;
