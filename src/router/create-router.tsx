import { PATHS } from "@constants/paths";
import Error404 from "@components/Error404";
import guestRoutes from "./guest-routes/guest-routes";
import { createBrowserRouter } from "react-router-dom";
import adminRoutes from "./private-admin-routes/admin-routes";
import clientRoutes from "./private-client-routes/client-routes";

export const createRouter = () => {
  const routes = [
    guestRoutes,
    adminRoutes,
    clientRoutes,

    {
      id: "ERROR",
      path: PATHS.NOT_FOUND,
      element: <Error404 />,
    },
  ];

  return createBrowserRouter(routes);
};
