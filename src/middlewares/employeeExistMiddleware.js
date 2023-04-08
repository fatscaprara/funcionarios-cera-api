import connection from "../config/database.js";

export const employeeExist = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { rows } = await connection.query(
      `
      SELECT
        *
      FROM
        employees
      WHERE
        id = $1
      ;
    `,
      [id]
    );

    const employee = rows[0];

    if (!employee) return res.sendStatus(404);

    req.employee = employee;
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
