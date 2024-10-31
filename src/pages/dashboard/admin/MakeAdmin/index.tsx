import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import FormInput from "@components/FormInput";
import { Button, Form } from "react-bootstrap";
import { useAddAdmin } from "@hooks/useAddAdmin";
import { OnBlurEvent, OnSubmitEvent } from "types/event-types";
import { checkIsEmailValid } from "@utils/check-is-email-valid";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState<string>();

  const { createNewAdmin, loading, success } = useAddAdmin();

  const handleSubmit = (event: OnSubmitEvent) => {
    event.preventDefault();

    const isValidEmail = checkIsEmailValid(adminEmail);

    if (isValidEmail) {
      createNewAdmin(adminEmail!);
    } else {
      toast.error("Email address is invalid.");
    }
  };

  const handleBlur = (e: OnBlurEvent) => {
    setAdminEmail(e.target.value);
  };

  useEffect(() => {
    if (success) {
      toast.success("Admin added successfully.");
    }
  }, [success]);

  return (
    <div className="make-admin my-3">
      <Form className="" onSubmit={handleSubmit}>
        <div className="make-admin-form row container">
          <div className="col-md-8   ">
            <FormInput
              label="Email"
              type="email"
              name={"email"}
              required={true}
              placeholder="Enter new admin email"
              feedbackTxt="Looks good!"
              handleBlur={handleBlur}
              as={"textarea"}
            />
          </div>

          <div className="col-md-4">
            <Button
              className="btn-success btn-addAdmin"
              disabled={loading}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MakeAdmin;
