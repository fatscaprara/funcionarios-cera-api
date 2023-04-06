import Joi from "joi";

const companySchema = Joi.object({
  name: Joi.string().required(),
  cnpj: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default companySchema;
