import { useAppContext } from "@contexts/index";
import { Navigate } from "react-router-dom";
import { PATHS } from "@constants/paths";
import Dashboard from "@pages/dashboard";
import { sidebarAdmin } from "@constants/sidebar-admin";

const PrivateAdminRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={PATHS.LOGIN} />;
  else if (isAdmin) return <Dashboard sidebarItems={sidebarAdmin} />;

  return <Navigate to={PATHS.CLIENT.ORDER} />;
};

export default PrivateAdminRoutes;
