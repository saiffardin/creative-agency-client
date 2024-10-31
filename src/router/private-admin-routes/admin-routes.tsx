import PrivateAdminRoutes from ".";
import { PATHS } from "@constants/paths";
import MakeAdmin from "@pages/dashboard/admin/MakeAdmin";
import AddService from "@pages/dashboard/admin/AddService";
import ServiceListAdmin from "@pages/dashboard/admin/ServiceListAdmin";

const adminRoutes = {
  element: <PrivateAdminRoutes />,
  children: [
    {
      path: PATHS.ADMIN.ADD_SERVICE,
      element: <AddService />,
    },
    {
      path: PATHS.ADMIN.MAKE_ADMIN,
      element: <MakeAdmin />,
    },
    {
      path: PATHS.ADMIN.SERVICE_LIST,
      element: <ServiceListAdmin />,
    },
  ],
};

export default adminRoutes;
