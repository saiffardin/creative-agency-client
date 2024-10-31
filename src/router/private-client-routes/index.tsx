import { Navigate } from "react-router-dom";
import { useAppContext } from "@contexts/index";
import { PATHS } from "@constants/paths";
import Dashboard from "@pages/dashboard";
import { sidebarClient } from "@constants/sidebar-client";

const PrivateClientRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  if (!isSignedIn) return <Navigate to={PATHS.LOGIN} />;
  else if (isAdmin) return <Navigate to={PATHS.ADMIN.ADD_SERVICE} />;

  return <Dashboard sidebarItems={sidebarClient} />;
};

export default PrivateClientRoutes;
