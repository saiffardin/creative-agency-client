import { GET } from "@api/GET";
import { URLS } from "@constants/urls";
import { useEffect, useState } from "react";
import { OrderType } from "./types/order-types";

const { GET_ALL_ORDERS } = URLS;

interface HookRetType {
  orders: OrderType[];
}

export const useGetOrders = (): HookRetType => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async () => {
    try {
      const data = await GET<OrderType[]>({
        url: GET_ALL_ORDERS,
      });

      const mappedClientData = data.map((item, indx) => ({
        ...item,
        index: indx + 1,
      }));

      setOrders(mappedClientData);
    } catch (error) {
      console.error(error);
      setOrders([]);
    }
  };

  return { orders };
};
