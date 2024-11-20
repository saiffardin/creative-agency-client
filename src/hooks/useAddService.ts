import { useState } from "react";
import { POST } from "@api/POST";
import { URLS } from "@constants/urls";
import { PostService } from "./types/add-service-types";

const { POST_SERVICE } = URLS;

interface HookRetType {
  loading: boolean;
  success: boolean;
  postNewService: (newService: PostService) => Promise<boolean | undefined>;
}

export const useAddService = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postNewService = async (newService: PostService) => {
    const { title, description, file } = newService;

    setLoading(true);
    setSuccess(false);

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", file);

    try {
      await POST({ url: POST_SERVICE, body: formData, isFormData: true });

      setLoading(false);
      setSuccess(true);
      return true;
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      return false;
    }
  };

  return { loading, success, postNewService };
};
