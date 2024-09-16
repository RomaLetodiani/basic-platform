import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { AuthStore, OrgStore, ProjectStore } from "@/stores";

const useRootNavigate = () => {
  const setTokens = AuthStore((state) => state.setTokens);
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
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      setOrgLoading(false);
      return;
    }

    setTokens({
      access_token: accessToken ?? "",
      refresh_token: refreshToken ?? "",
    })
      .then(async () => {
        await handleSetOrgAndProjectIds();
      })
      .finally(() => {
        setOrgLoading(false);
      });
  }, [
    handleSetOrgAndProjectIds,
    navigate,
    setLastOrgId,
    setLastProjectId,
    setOrgLoading,
    setTokens,
  ]);
  return {
    orgLoading,
    projectLoading,
  };
};

export default useRootNavigate;
