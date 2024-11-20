import { useState } from "react";
import { GET } from "@api/GET";
import { URLS } from "@constants/urls";
import { ReviewType } from "./types/review-types";

interface HookRetType {
  allReviews: ReviewType[];
  getAllReviews: () => void;
}

const { GET_ALL_REVIEWS } = URLS;

export const useGetReviews = (): HookRetType => {
  const [allReviews, setAllReviews] = useState<ReviewType[]>([]);

  const getAllReviews = async () => {
    try {
      const response = await GET<ReviewType[]>({
        url: GET_ALL_REVIEWS,
      });
      setAllReviews(response || []);
    } catch (error) {
      console.error(error);
      setAllReviews([]);
    }
  };

  return { allReviews, getAllReviews };
};
