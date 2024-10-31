import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashNav from "@components/DashNav";
import { useAppContext } from "@contexts/index";
import Sidebar, { SidebarItem } from "@components/Sidebar";

interface Props {
  sidebarItems: SidebarItem[];
}

const Dashboard = ({ sidebarItems }: Props) => {
  const { userInfo } = useAppContext();
  const [activeItem, setActiveItem] = useState(sidebarItems?.[0]);

  return (
    <div className="d-flex">
      <Sidebar
        sidebarItems={sidebarItems}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <div className="w-100 dashboard-div">
        <DashNav
          title={activeItem.title}
          userName={userInfo.displayName || ""}
        />

        <div className="my-3 mx-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
