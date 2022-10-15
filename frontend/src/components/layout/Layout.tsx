import PropTypes from "prop-types";
import React, { PropsWithChildren } from "react";
import MainNavigation from "./MainNavigation";

const defaultPropTypes = {};

const Layout: React.FC<PropsWithChildren> = ({children})  => {
  return (
    <div>
      <MainNavigation />
      {children}
    </div>
  );
};

export default Layout;