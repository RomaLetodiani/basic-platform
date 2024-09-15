import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProjectStore } from "@/stores";

const useProjectNavigate = () => {
  const navigate = useNavigate();
  const lastProjectId = ProjectStore((state) => state.lastProjectId);

  useEffect(() => {
    if (lastProjectId) {
      navigate(`${lastProjectId}`);
    } else {
      navigate("/org");
    }
  }, [lastProjectId, navigate]);
};

export default useProjectNavigate;
