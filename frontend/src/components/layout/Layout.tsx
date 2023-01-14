import React, { PropsWithChildren } from "react";
import MainNavigation from "./MainNavigation";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      {children}
    </div>
  );
};

export default Layout;
