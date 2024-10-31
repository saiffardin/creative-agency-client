import { OrderType } from "@hooks/types/order-types";
import { StatusHandlerType } from "types/event-types";
import { ORDER_STATUS } from "@constants/order-status";
import { getTextClassByOrderStatus } from "../helper/get-text-class-by-order-status";

interface Props {
  client: OrderType;
  handleChange: StatusHandlerType;
}

const STATUS_OPTIONS = [
  {
    label: ORDER_STATUS.PENDING,
    value: ORDER_STATUS.PENDING,
  },

  {
    label: ORDER_STATUS.DONE,
    value: ORDER_STATUS.DONE,
  },

  {
    label: ORDER_STATUS.ON_GOING,
    value: ORDER_STATUS.ON_GOING,
  },
];

const SelectStatus = ({ client, handleChange }: Props) => {
  return (
    <select
      style={{ border: "0" }}
      className={getTextClassByOrderStatus(client.status || "")}
      id="dropdown"
      onChange={(e) => handleChange(e, client)}
    >
      <option className="d-none" disabled selected>
        {" "}
        {client.status}{" "}
      </option>

      {STATUS_OPTIONS.map((item) => (
        <option className="text-body" key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectStatus;
