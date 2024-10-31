import { PATHS } from "@constants/paths";
import { SidebarItem } from "@components/Sidebar";
import {
  faShoppingCart,
  faClipboardList,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarClient: SidebarItem[] = [
  {
    id: 1,
    icon: faShoppingCart,
    title: "Order",
    url: PATHS.CLIENT.ORDER,
  },

  {
    id: 2,
    icon: faClipboardList,
    title: "Service list",
    url: PATHS.CLIENT.SERVICE_LIST,
  },

  {
    id: 3,
    icon: faCommentAlt,
    title: "Review",
    url: PATHS.CLIENT.REVIEW,
  },
];
