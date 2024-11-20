import { ORDER_STATUS } from "@constants/order-status";

export const getTextClassByOrderStatus = (currOrderStatus: string) => {
  switch (currOrderStatus) {
    case ORDER_STATUS.PENDING:
      return "text-danger bg-danger-subtle";

    case ORDER_STATUS.DONE:
      return "text-success bg-success-subtle";

    case ORDER_STATUS.ON_GOING:
      return "text-warning-emphasis  bg-warning-subtle";

    default:
      return "";
  }
};
