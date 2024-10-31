import { PATHS } from "@constants/paths";
import { SidebarItem } from "@components/Sidebar";
import {
  faClipboardList,
  faPlus,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarAdmin: SidebarItem[] = [
  {
    id: 1,
    icon: faPlus,
    title: "Add Service",
    url: PATHS.ADMIN.ADD_SERVICE,
  },

  {
    id: 2,
    icon: faClipboardList,
    title: "Service list",
    url: PATHS.ADMIN.SERVICE_LIST,
  },

  {
    id: 3,
    icon: faUserPlus,
    title: "Make Admin",
    url: PATHS.ADMIN.MAKE_ADMIN,
  },
];
