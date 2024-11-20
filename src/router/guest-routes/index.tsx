import { PATHS } from "@constants/paths";
import { useAppContext } from "@contexts/index";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const {
    userInfo: { isSignedIn, isAdmin },
  } = useAppContext();

  const redirectAdmin = <Navigate to={PATHS.ADMIN.ADD_SERVICE} />;
  const redirectClient = <Navigate to={PATHS.CLIENT.ORDER} />;

  if (!isSignedIn) return <Outlet />;
  else if (isAdmin) return redirectAdmin;
  return redirectClient;
};

export default GuestRoutes;
