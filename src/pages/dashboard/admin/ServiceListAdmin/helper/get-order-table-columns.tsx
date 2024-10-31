import { TableColumns } from "@components/Table";
import { OrderType } from "@hooks/types/order-types";
import SelectStatus from "../components/SelectStatus";
import { StatusHandlerType } from "types/event-types";

interface GetOrderTable {
  handleChange: StatusHandlerType;
}

export const getOrderTableColumns = ({
  handleChange,
}: GetOrderTable): TableColumns<OrderType> => {
  return [
    { key: "index", label: "No." },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "service", label: "Service" },
    { key: "projectDetail", label: "Project Detail" },
    {
      key: "status",
      label: "Status",
      render: (data) => {
        if (data) {
          return <SelectStatus client={data} handleChange={handleChange} />;
        }
      },
    },
  ];
};
