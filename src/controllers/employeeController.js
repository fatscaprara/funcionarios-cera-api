import connection from "../config/database.js";

export const getAllEmployee = async (req, res) => {
  try {
    const { rows } = await connection.query(`
      SELECT
        *
      FROM
        employees
    ;`);

    res.send(rows);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

// {
//   name: "Juca",
//   number_phone: 9,
//   pix_key: "ndkljds",
//   pix_type: "ocdjpj",
//   department: "gestao",
//   nfe_is_sent: "false"
// }

export const insertOneEmployee = async (req, res) => {
  const { name, number_phone, salary, pix_key, pix_type, department } =
    req.employee;

  try {
    await connection.query(
      `
      INSERT INTO
        employees (name, number_phone, salary, pix_key, pix_type, department)
      VALUES
        ($1, $2, $3, $4, $5, $6)
    ;`,
      [name, number_phone, salary, pix_key, pix_type, department]
    );

    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
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
    console.log(err);
    res.sendStatus(500);
  }
};
