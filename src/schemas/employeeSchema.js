import Joi from "joi";

const employeeSchema = Joi.object({
  name: Joi.string().required(),
  number_phone: Joi.number().integer().required(),
  salary: Joi.number().integer().required(),
  pix_key: Joi.string().required(),
  pix_type: Joi.string().required(),
  department: Joi.string().required(),
});

export default employeeSchema;
