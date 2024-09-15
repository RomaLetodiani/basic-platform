import { Link, Outlet } from "react-router-dom";
import { useOrgNavigate } from "./hooks";
import { Stack } from "@mui/material";

const OrgLayout = () => {
  const { orgId } = useOrgNavigate();

  return (
    <div>
      <div>
        org layout
        <Stack spacing={2}>
          <Link to={`${orgId}`}>Overview</Link>
          <Link to={`${orgId}/project`}>Projects</Link>
          <Link to={`${orgId}/team`}>Team</Link>
        </Stack>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OrgLayout;
