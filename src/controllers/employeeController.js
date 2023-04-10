import {
  deleteEmployeeById,
  findEmployeeByCompanyId,
  insertEmployee,
} from "../repositories/employeeRepository.js";

export const getAllEmployee = async (req, res) => {
  try {
    const { company } = req;

    const employeesResult = await findEmployeeByCompanyId(company.id);

    const employees = employeesResult.rows;

    res.send(employees);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const insertOneEmployee = async (req, res) => {
  try {
    const { company } = req;

    const company_id = company.id;

    const { name, number_phone, salary, pix_key, pix_type, department } =
      req.employee;

    await insertEmployee({
      name,
      number_phone,
      salary,
      pix_key,
      pix_type,
      department,
      company_id,
    });

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const { company } = req;
    const { employee } = req;

    if (employee.company_id !== company.id) return res.sendStatus(401);

    const { id } = req.params;

    await deleteEmployeeById(id);

    res.sendStatus(200);
  } catch (err) {
    return res.status(500).send(err);
  }
};
