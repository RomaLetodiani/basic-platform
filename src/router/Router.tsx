import { createBrowserRouter, Navigate } from "react-router-dom";

// Pages imports
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
        element: <AuthRoute />,
        children: [
          {
            path: "/login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        path: "/",
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
