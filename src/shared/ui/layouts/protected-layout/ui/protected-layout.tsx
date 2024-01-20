import { type FC } from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout: FC = () => {
  return (
    <div>
      ProtectedLayoutd
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
