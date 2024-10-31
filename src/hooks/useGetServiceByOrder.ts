import { GET } from "@api/GET";
import { URLS } from "@constants/urls";
import { ServiceType } from "./types/service-types";

const { GET_SERVICE_BY_ORDER } = URLS;

interface HookRetType {
  getServiceByOrder: (order: string) => Promise<ServiceType | undefined>;
}

export const useGetServiceByOrder = (): HookRetType => {
  const getServiceByOrder = async (
    order: string
  ): Promise<ServiceType | undefined> => {
    try {
      const data = await GET<ServiceType>({
        url: GET_SERVICE_BY_ORDER(order),
      });

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { getServiceByOrder };
};
