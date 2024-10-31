import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import Button from "@components/Button";
import { useEffect, useState } from "react";
import FormInput from "@components/FormInput";
import { useAddOrder } from "@hooks/useAddOrder";
import { ORDER_STATUS } from "@constants/order-status";
import { useGetServices } from "@hooks/useGetServices";
import { PostOrder } from "@hooks/types/add-order-types";
import { OnBlurEvent, OnSubmitEvent } from "types/event-types";
import FormSelect, { onChangeFormSelectType } from "@components/FormSelect";

const initialOrder: PostOrder = {
  email: "",
  name: "",
  price: 0,
  projectDetail: "",
  service: "",
  status: ORDER_STATUS.PENDING,
};

const Order = () => {
  const [dropDownChk, setDropDownChk] = useState(false);

  const [orderInfo, setOrderInfo] = useState<PostOrder>(initialOrder);

  const { allServices, getAllServices } = useGetServices();
  const { postNewOrder, loading, success } = useAddOrder();

  const handleBlur = (e: OnBlurEvent) => {
    setOrderInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event: OnSubmitEvent) => {
    event.preventDefault();

    if (dropDownChk) {
      postNewOrder(orderInfo);
    } else {
      event.stopPropagation();
      toast.error("Select a service please.");
    }
  };

  const handleChangeSelect: onChangeFormSelectType = (e) => {
    setOrderInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setDropDownChk(true);
  };

  useEffect(() => {
    getAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (success) {
      (document.getElementById("order-form-id") as HTMLFormElement).reset();
      setDropDownChk(false);
    }
  }, [success]);

  return (
    <div className="order-div">
      {allServices.length > 0 ? (
        <Form onSubmit={handleSubmit} id="order-form-id">
          <div className="row ">
            <div className="col-md-8 col-lg-6">
              {/* name / comp name */}
              <FormInput
                name="name"
                label="Name"
                type="text"
                required
                as={"input"}
                handleBlur={handleBlur}
                placeholder="Your name/ company's name"
              />

              {/* email */}
              <FormInput
                name="email"
                label="Email"
                type="email"
                required
                as={"input"}
                handleBlur={handleBlur}
                placeholder="Your email address"
              />

              {/* service dropdown */}
              <FormSelect
                name="service"
                label="Services"
                required
                onChange={handleChangeSelect}
                defaultValue="select service"
                items={allServices.map((item) => item.title!)}
              />

              {/* project detail */}
              <FormInput
                name="projectDetail"
                label="Project Details"
                as="textarea"
                required
                handleBlur={handleBlur}
                placeholder="Write detail about project"
              />

              {/* price */}
              <FormInput
                name="price"
                label="Price"
                type="number"
                as="input"
                required
                handleBlur={handleBlur}
                placeholder="Input your estimated budget"
              />
            </div>
          </div>

          <Button
            text="Submit"
            type="submit"
            className="mt-3"
            disabled={loading}
          />
        </Form>
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </div>
  );
};

export default Order;
