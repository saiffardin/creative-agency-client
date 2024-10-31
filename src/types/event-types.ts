import { OrderType } from "@hooks/types/order-types";
import { ChangeEvent, FocusEvent, FormEvent } from "react";

export type OnSubmitEvent = FormEvent;
export type OnBlurEvent = FocusEvent<HTMLInputElement>;
export type OnChangeEvent = FormEvent<HTMLInputElement>;
export type OnChangeSelectEvent = ChangeEvent<HTMLSelectElement>;

export type StatusHandlerType = (
  e: OnChangeSelectEvent,
  data: OrderType
) => void;
