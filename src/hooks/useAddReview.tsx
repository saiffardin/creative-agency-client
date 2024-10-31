import { useState } from "react";
import { POST } from "@api/POST";
import { toast } from "react-toastify";
import { URLS } from "@constants/urls";
import { PostReview } from "./types/add-review-types";

const { ADD_REVIEW } = URLS;

interface HookRetType {
  loading: boolean;
  success: boolean;
  postNewReview: (newReview: PostReview) => Promise<void>;
}

export const useAddReview = (): HookRetType => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postNewReview = async (newReview: PostReview) => {
    setLoading(true);
    setSuccess(false);

    try {
      const response = await POST({ url: ADD_REVIEW, body: newReview });

      if (response) {
        setLoading(false);
        setSuccess(true);
        toast.success("Thanks for submitting your review.");
      } else {
        setLoading(false);
        setSuccess(false);
        toast.error("Review Submission failed.");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSuccess(false);
      toast.error("ERROR !! Something went wrong.");
    }
  };

  return { loading, success, postNewReview };
};
