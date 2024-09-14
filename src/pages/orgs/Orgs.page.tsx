import { Outlet } from "react-router-dom";
import { useOrgNavigate } from "./hooks";

const OrgsPage = () => {
  useOrgNavigate();

  return (
    <div>
      <div>orgs layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OrgsPage;
