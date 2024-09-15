import { lazy } from "react";

const OrgOverviewPage = lazy(() => import("./pages/overview/Overview.page"));
const OrgProjectsPage = lazy(() => import("./pages/projects/Projects.page"));
const OrgTeamPage = lazy(() => import("./pages/team/Team.page"));
const OrgLayout = lazy(() => import("./Org.layout"));

export { OrgOverviewPage, OrgProjectsPage, OrgTeamPage, OrgLayout };
