import { Outlet } from "react-router-dom";
import { useOrgNavigate } from "./hooks";

const OrgLayout = () => {
  useOrgNavigate();

  return (
    <div>
      <div>org layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OrgLayout;
