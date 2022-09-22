import * as yup from "yup";

export const schema = yup.object({
  sku: yup.string().required(),
  name: yup.string().required(),
  price: yup.string().required(),
  size: yup.number().positive().integer(),
  width: yup.number().positive().integer(),
  weight: yup.number().positive().integer(),
  height: yup.number().positive().integer(),
  length: yup.number().positive().integer(),
});

