import connection from "../config/database.js";

export const getAllEmployee = async (req, res) => {
  try {
    const { company } = req;

    const employeesResult = await connection.query(
      `
      SELECT
        *
      FROM
        employees
      WHERE
        company_id = $1
    ;`,
      [company.id]
    );

    const employees = employeesResult.rows;

    res.send(employees);
  } catch (err) {
    return res.status(500).send(err);
  }
};

// {
//   name: "Juca",
//   number_phone: 9,
//   salary: 2000,
//   pix_key: "ndkljds",
//   pix_type: "ocdjpj",
//   department: "gestao",
//   company_id: 1
// }

export const insertOneEmployee = async (req, res) => {
  try {
    const { company } = req;

    const company_id = company.id;

    const { name, number_phone, salary, pix_key, pix_type, department } =
      req.employee;

    await connection.query(
      `
      INSERT INTO
        employees (name, number_phone, salary, pix_key, pix_type, department, company_id)
      VALUES
        ($1, $2, $3, $4, $5, $6, $7)
    ;`,
      [name, number_phone, salary, pix_key, pix_type, department, company_id]
    );

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
    await connection.query(
      `
      DELETE FROM
        employees
      WHERE
        id = $1
      ;
      `,
      [id]
    );

    res.sendStatus(200);
  } catch (err) {
    return res.status(500).send(err);
  }
};
