import PrivateClientRoutes from ".";
import { PATHS } from "@constants/paths";
import Order from "@pages/dashboard/client/Order";
import Review from "@pages/dashboard/client/Review";
import ServiceListClient from "@pages/dashboard/client/ServiceListClient";

const clientRoutes = {
  element: <PrivateClientRoutes />,
  children: [
    {
      path: PATHS.CLIENT.ORDER,
      element: <Order />,
    },
    {
      path: PATHS.CLIENT.REVIEW,
      element: <Review />,
    },
    {
      path: PATHS.CLIENT.SERVICE_LIST,
      element: <ServiceListClient />,
    },
  ],
};

export default clientRoutes;
