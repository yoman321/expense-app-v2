import { PropsWithChildren } from "react";

const CardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="shadow p-3 mb-5 bg-white">{children}</div>;
};
export default CardLayout;
