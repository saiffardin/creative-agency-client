import { useState } from "react";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Button from "@components/Button";
import FormInput from "@components/FormInput";
import { useAppContext } from "@contexts/index";
import { useAddReview } from "@hooks/useAddReview";
import { PostReview } from "@hooks/types/add-review-types";
import { OnBlurEvent, OnSubmitEvent } from "types/event-types";

const Review = () => {
  const {
    userInfo: { displayName, photoURL },
  } = useAppContext();

  const [review, setReview] = useState<PostReview>({
    name: displayName || "",
    photoURL: photoURL || "",
    company: "",
    description: "",
  });

  const { loading, postNewReview } = useAddReview();

  const handleSubmit = (event: OnSubmitEvent) => {
    event.preventDefault();

    if (review.company.trim().length && review.description.trim().length) {
      postNewReview(review);
    } else {
      event.stopPropagation();
      toast.error("Form is not correct.");
    }
  };

  const handleBlur = (e: OnBlurEvent) => {
    const newReview = { ...review, [e.target.name]: e.target.value };
    setReview(newReview);
  };

  return (
    <div className="review-div">
      <Form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <FormInput
              type="text"
              placeholder="Your name"
              name="name"
              handleBlur={handleBlur}
              defaultValue={displayName || ""}
              feedbackTxt="Looks good!"
              label="Name"
              disabled
            />

            <FormInput
              required
              type="text"
              placeholder="Company's name, Designation"
              name="company"
              handleBlur={handleBlur}
              feedbackTxt="Looks good!"
              label="Company Info"
            />

            <FormInput
              required
              as={"textarea"}
              placeholder="Give your review here"
              name="description"
              handleBlur={handleBlur}
              feedbackTxt="Looks good!"
              label="Description"
            />
          </div>
        </div>

        <Button text="Submit" type="submit" disabled={loading} />
      </Form>
    </div>
  );
};

export default Review;
