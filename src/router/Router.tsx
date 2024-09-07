import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "@/pages/auth";
import Root from "./root/Root";
import { AuthRoute, ProtectedRoute } from "./routes";

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
      },
    ],
  },
]);

export default Router;
