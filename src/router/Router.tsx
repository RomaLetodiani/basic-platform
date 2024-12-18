// React Router imports
import { createBrowserRouter, Navigate } from "react-router-dom";

// Root imports
import { AuthRoute, ProtectedRoute } from "./routes";
import Root from "./root/Root";

/* Pages imports */

// Orgs
import { OrgLayout, OrgOverviewPage, OrgProjectsPage, OrgTeamPage } from "@/pages/orgs";

// Projects
import {
  ProjectLayout,
  ChatPage,
  ChatViewPage,
  ProjectOverviewPage,
  KnowledgeBase,
  DialogFlowPage,
  Integrations,
  Extensions,
} from "@/pages/projects";

// Auth
import { LoginPage } from "@/pages/auth";

// Error
import { ErrorPage } from "@/pages";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
            element: <OrgLayout />,
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
          {
            path: "orgs/:orgId/projects",
            element: <ProjectLayout />,
            children: [
              {
                path: ":projectId",
                children: [
                  {
                    index: true,
                    element: <ProjectOverviewPage />,
                  },
                  {
                    path: "chats",
                    element: <ChatPage />,
                    children: [
                      {
                        path: ":chatId",
                        element: <ChatViewPage />,
                      },
                    ],
                  },
                  {
                    path: "knowledge-base",
                    element: <KnowledgeBase />,
                  },
                  {
                    path: "dialog-flow",
                    element: <DialogFlowPage />,
                  },
                  {
                    path: "integrations",
                    element: <Integrations />,
                  },
                  {
                    path: "extensions",
                    element: <Extensions />,
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
