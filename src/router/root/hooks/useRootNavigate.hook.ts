import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { AuthStore, OrgStore, ProjectStore } from "@/stores";

const useRootNavigate = () => {
  const isLoggedIn = AuthStore((state) => state.isLoggedIn);
  const setLastOrgId = OrgStore((state) => state.setLastOrgId);
  const orgLoading = OrgStore((state) => state.loading);
  const setOrgLoading = OrgStore((state) => state.setLoading);

  const setLastProjectId = ProjectStore((state) => state.setLastProjectId);
  const projectLoading = ProjectStore((state) => state.loading);

  const navigate = useNavigate();

  const { orgId, projectId } = useParams();

  const handleSetOrgAndProjectIds = useCallback(async () => {
    const lastOrgId = orgId ?? localStorage.getItem("lastOrgId");
    if (!lastOrgId) {
      setOrgLoading(false);
      return;
    }

    await setLastOrgId(lastOrgId)
      .then(async () => {
        if (projectId) {
          await setLastProjectId(projectId).catch(() => {
            navigate(`org-${lastOrgId}-project-${projectId}-access-denied`);
          });
        }
      })
      .catch(() => {
        navigate(`org-${lastOrgId}-access-denied`);
      });
  }, [orgId, projectId, navigate, setLastProjectId, setLastOrgId, setOrgLoading]);

  useEffect(() => {
    if (!isLoggedIn) {
      setOrgLoading(false);
      return navigate("/login");
    } else {
      handleSetOrgAndProjectIds();
    }
  }, [
    isLoggedIn,
    handleSetOrgAndProjectIds,
    navigate,
    setLastOrgId,
    setLastProjectId,
    setOrgLoading,
  ]);
  return {
    orgLoading,
    projectLoading,
  };
};

export default useRootNavigate;
