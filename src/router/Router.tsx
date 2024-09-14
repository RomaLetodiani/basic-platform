import { createBrowserRouter, Navigate } from "react-router-dom";

// Pages imports
import { OrgOverviewPage, OrgProjectsPage, OrgsPage, OrgTeamPage } from "@/pages/orgs";
import { LoginPage } from "@/pages/auth";
import { ErrorPage } from "@/pages";

// Root imports
import { AuthRoute, ProtectedRoute } from "./routes";
import Root from "./root/Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Navigate to="orgs" />,
          },
          {
            path: "orgs",
            element: <OrgsPage />,
            children: [
              {
                path: ":orgId",
                children: [
                  {
                    index: true,
                    element: <OrgOverviewPage />,
                  },
                  {
                    path: "projects",
                    element: <OrgProjectsPage />,
                  },
                  {
                    path: "team",
                    element: <OrgTeamPage />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        element: <AuthRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
