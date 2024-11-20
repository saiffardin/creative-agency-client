import { useEffect } from "react";
import { useGetReviews } from "@hooks/useGetReviews";
import UserCard from "@components/UserCard";

const ClientReview = () => {
  const { allReviews, getAllReviews } = useGetReviews();

  useEffect(() => {
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mt-5 client-review-div d-flex flex-column align-items-center">
      <h1 className="my-5 text-center">
        Clients <span>Feedback</span>
      </h1>

      <section className="mt-5 d-flex justify-content-center flex-wrap">
        {allReviews.map((review, indx) => (
          <UserCard
            key={indx}
            userImg={{
              url: review?.photoURL,
              altTxt: review?.name,
              classNames: "customer-img",
            }}
            userInfo={{
              name: review?.name,
              company: review?.company,
              classNames: "customer-info",
            }}
            description={review.description}
          />
        ))}
      </section>
    </main>
  );
};

export default ClientReview;
