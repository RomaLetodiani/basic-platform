import { Outlet } from "react-router-dom";
import { useProjectNavigate } from "./hooks";

const ProjectLayout = () => {
  useProjectNavigate();

  return (
    <div>
      <div>Project layout</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProjectLayout;
