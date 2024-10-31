import GuestRoutes from ".";
import Home from "@pages/home";
import Login from "@pages/login";
import { PATHS } from "@constants/paths";

const guestRoutes = {
  element: <GuestRoutes />,
  children: [
    {
      path: PATHS.HOME,
      element: <Home />,
    },
    {
      path: PATHS.LOGIN,
      element: <Login />,
    },
  ],
};

export default guestRoutes;
