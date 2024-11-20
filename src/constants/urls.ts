const BASE_URL = import.meta.env.VITE_BASE_URL;

export const URLS = {
  GET_ALL_SERVICES: BASE_URL + "/loadAll",
  GET_ALL_REVIEWS: BASE_URL + "/loadAllReviews",
  FIND_ADMIN: (email: string) => `${BASE_URL}/findAdmin/${email}`,
  POST_SERVICE: BASE_URL + "/addService",
  GET_ALL_ORDERS: BASE_URL + "/loadAllOrders",
  UPDATE_ORDER_BY_ID: (id: string) => `${BASE_URL}/updateStatus/${id}`,
  ADD_ADMIN: BASE_URL + "/addAdmin",
  ADD_ORDER: BASE_URL + "/addOrder",
  GET_ORDERS_BY_EMAIL: (email: string) => `${BASE_URL}/findOrders/${email}`,
  GET_SERVICE_BY_ORDER: (order: string) => `${BASE_URL}/findService/${order}`,
  ADD_REVIEW: BASE_URL + "/addReview",
};
