import { lazy } from "react";

const OrgOverviewPage = lazy(() => import("./overview/Overview.page"));
const OrgProjectsPage = lazy(() => import("./projects/Projects.page"));
const OrgTeamPage = lazy(() => import("./team/Team.page"));
const OrgsPage = lazy(() => import("./Orgs.page"));

export { OrgOverviewPage, OrgProjectsPage, OrgTeamPage, OrgsPage };
