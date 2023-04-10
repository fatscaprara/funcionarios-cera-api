import { findEmployeeById } from "../repositories/employeeRepository.js";

export const employeeExist = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rows } = await findEmployeeById(id);

    const employee = rows[0];

    if (!employee) return res.sendStatus(404);

    req.employee = employee;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
