import { Outlet } from "react-router-dom";
import { Menu } from "./components";

const ProjectLayout = () => {
  return (
    <div>
      <Menu />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectLayout;
