import companySchema from "../schemas/companySchema.js";
export const companyValidade = async (req, res, next) => {
  const { error } = companySchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => err.message);

    return res.status(401).send(errors);
  }

  req.company = req.body;
  next();
};
