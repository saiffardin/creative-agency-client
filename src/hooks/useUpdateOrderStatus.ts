import { PATCH } from "@api/PATCH";
import { URLS } from "@constants/urls";
import { toast } from "react-toastify";

const { UPDATE_ORDER_BY_ID } = URLS;

interface HookRetType {
  updateOrderStatusById: (id: string, status: string) => Promise<void>;
}

export const useUpdateOrderStatus = (): HookRetType => {
  const updateOrderStatusById = async (id: string, status: string) => {
    try {
      const data = await PATCH<boolean, { status: string }>({
        url: UPDATE_ORDER_BY_ID(id),
        body: { status },
      });

      if (data) {
        toast.success("Order Status Updated Successfully");
      } else {
        toast.error("Failed to update order status");
      }
    } catch (error) {
      console.error(error);
      toast.error("ERROR: Failed to update order status");
    }
  };

  return { updateOrderStatusById };
};
