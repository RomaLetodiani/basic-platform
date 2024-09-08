import { createBrowserRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "./routes";
import { LoginPage } from "@/pages/auth";

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
    ],
  },
]);

export default Router;
