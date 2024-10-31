import { useState } from "react";
import { POST } from "@api/POST";
import { URLS } from "@constants/urls";

interface HookRetType {
  loading: boolean;
  success: boolean;
  createNewAdmin: (email: string) => Promise<void>;
}

const { ADD_ADMIN } = URLS;

export const useAddAdmin = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createNewAdmin = async (email: string) => {
    setLoading(true);
    setSuccess(false);

    try {
      await POST({ url: ADD_ADMIN, body: { email } });

      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
    }
  };

  return { createNewAdmin, loading, success };
};
