import { createBrowserRouter } from "react-router-dom";

import { LogIn } from "@/pages/auth";
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
            element: <LogIn />,
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
