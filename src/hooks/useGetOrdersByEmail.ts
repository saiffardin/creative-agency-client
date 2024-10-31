import { GET } from "@api/GET";
import { useState } from "react";
import { URLS } from "@constants/urls";

const { GET_ORDERS_BY_EMAIL } = URLS;

interface HookRetType {
  orders: string[];
  getOrderByEmail: (email: string) => Promise<void>;
}

export const useGetOrdersByEmail = (): HookRetType => {
  const [orders, setOrders] = useState<string[]>([]);

  const getOrderByEmail = async (email: string) => {
    try {
      const data = await GET<string[]>({
        url: GET_ORDERS_BY_EMAIL(email),
      });

      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { orders, getOrderByEmail };
};
