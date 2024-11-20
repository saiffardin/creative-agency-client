import { useState } from "react";
import { toast } from "react-toastify";
import FormInput from "@components/FormInput";
import { Button, Form } from "react-bootstrap";
import { SERVICE_INFO_FORM } from "./constants";
import { useAddService } from "@hooks/useAddService";
import { PostService } from "@hooks/types/add-service-types";
import { OnChangeEvent, OnBlurEvent, OnSubmitEvent } from "types/event-types";

type ServiceInfoType = Omit<PostService, "file">;

const AddService = () => {
  const [validated, setValidated] = useState(false);
  const [serviceInfo, setServiceInfo] = useState<ServiceInfoType>({
    title: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const { postNewService, loading } = useAddService();

  const handleSubmit = async (event: OnSubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formValidity = form.checkValidity();

    setValidated(formValidity);

    if (formValidity) {
      createService();
    } else {
      event.stopPropagation();
      toast.error("You must fill-up the required fields.");
    }
  };

  const createService = async () => {
    if (!file) return;

    const data = await postNewService({
      title: serviceInfo.title,
      description: serviceInfo.description,
      file: file,
    });

    if (data) {
      toast.success("Service added - successfully");
    }
  };

  const handleBlur = (e: OnBlurEvent) => {
    const newInfo = { ...serviceInfo, [e.target.name]: e?.target?.value };
    setServiceInfo(newInfo);
  };

  const handleFileChange = (e: OnChangeEvent) => {
    const newFile = (e.target as HTMLInputElement)?.files?.[0] || null;
    setFile(newFile);
  };

  return (
    <div className="add-service-div">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="row add-service-form container ">
          <div className="col-md-6">
            <FormInput
              label="Service title"
              type="text"
              name={SERVICE_INFO_FORM.TITLE}
              required={true}
              placeholder="Enter title"
              feedbackTxt="Looks good!"
              handleBlur={handleBlur}
            />

            <FormInput
              label="Description"
              as="textarea"
              name={SERVICE_INFO_FORM.DESCRIPTION}
              required={true}
              placeholder="Enter Description"
              feedbackTxt="Looks good!"
              handleBlur={handleBlur}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              label="Upload Icon"
              type="file"
              name={SERVICE_INFO_FORM.FILE}
              required={true}
              placeholder="Enter Description"
              feedbackTxt="Looks good!"
              handleFileChange={handleFileChange}
            />
          </div>
        </div>

        <div className="d-flex ms-5 pe-2 mt-2 justify-content-end">
          <Button
            className="btn-success px-4 my-2 ms-5"
            disabled={loading}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddService;
