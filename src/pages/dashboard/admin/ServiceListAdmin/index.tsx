import Table from "@components/Table";
import { useGetOrders } from "@hooks/useGetOrders";
import { StatusHandlerType } from "types/event-types";
import { useUpdateOrderStatus } from "@hooks/useUpdateOrderStatus";
import { getOrderTableColumns } from "./helper/get-order-table-columns";
import { getTextClassByOrderStatus } from "./helper/get-text-class-by-order-status";

const ServiceListAdmin = () => {
  const { orders } = useGetOrders();

  const { updateOrderStatusById } = useUpdateOrderStatus();

  const handleChange: StatusHandlerType = (e, data) => {
    const currOrderStatus = e.target.value;
    const currentOrderID = data._id;

    e.target.className = getTextClassByOrderStatus(currOrderStatus);

    updateOrderStatusById(currentOrderID, currOrderStatus);
  };

  return (
    <div className="admin-service-list">
      <Table rows={orders} columns={getOrderTableColumns({ handleChange })} />
    </div>
  );
};

export default ServiceListAdmin;
