import { useState } from "react";
import { POST } from "@api/POST";
import { URLS } from "@constants/urls";
import { toast } from "react-toastify";
import { PostOrder } from "./types/add-order-types";

const { ADD_ORDER } = URLS;

interface HookRetType {
  loading: boolean;
  success: boolean;
  postNewOrder: (newOrder: PostOrder) => Promise<void>;
}

export const useAddOrder = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postNewOrder = async (newOrder: PostOrder) => {
    setLoading(true);
    setSuccess(false);

    try {
      const response = await POST({ url: ADD_ORDER, body: newOrder });

      if (response) {
        setLoading(false);
        setSuccess(true);
        toast.success("Your order has been placed successfully.");
      } else {
        setLoading(false);
        setSuccess(false);
        toast.error("Failed to place new order.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      toast.error("ERROR !! Something went wrong.");
    }
  };

  return { loading, success, postNewOrder };
};
