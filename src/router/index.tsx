import { useState } from "react";
import { UserInfo } from "@contexts/types";
import { AppContext } from "@contexts/index";
import { createRouter } from "./create-router";
import { RouterProvider } from "react-router-dom";

function AppRouter() {
  const [userInfo, setUserInfo] = useState<UserInfo>({});

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      <RouterProvider router={createRouter()} />
    </AppContext.Provider>
  );
}

export default AppRouter;
