import employeeSchema from "../schemas/employeeSchema.js";

export const employeeDataValidade = (req, res, next) => {
  const { error } = employeeSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((err) => err.message);

    return res.status(401).send(errors);
  }

  req.employee = req.body;
  next();
};
