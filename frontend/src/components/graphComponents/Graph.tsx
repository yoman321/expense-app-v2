import { useState } from "react";
import Login from "../loginComponents/Login";
import Backdrop from "../loginComponents/Backdrop";

const Graph = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {showLogin && (
        <>
          <Login /> <Backdrop />
        </>
      )}
    </div>
  );
};
export default Graph;
