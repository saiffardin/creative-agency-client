import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export type onChangeFormSelectType =
  React.ChangeEventHandler<HTMLSelectElement>;

interface Props {
  label: string;
  items: string[] | number[];
  name: string;
  feedbackTxt?: string;
  required?: boolean;
  onChange?: onChangeFormSelectType;
  defaultValue?: string;
}

const FormSelect = ({
  label,
  items,
  name,
  feedbackTxt,
  required,
  onChange,
  defaultValue = "Select",
}: Props) => {
  return (
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label className="mb-0">
          {label}{" "}
          {required ? <span className="text-danger fw-normal">*</span> : null}
        </Form.Label>

        <Form.Select
          className="mt-0"
          required={required}
          as="select"
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
        >
          <option disabled selected>
            {defaultValue}
          </option>

          {items?.map((item) => (
            <option>{item}</option>
          ))}
        </Form.Select>

        {feedbackTxt ? (
          <Form.Control.Feedback>{feedbackTxt}</Form.Control.Feedback>
        ) : null}
      </Form.Group>
    </Row>
  );
};

export default FormSelect;
