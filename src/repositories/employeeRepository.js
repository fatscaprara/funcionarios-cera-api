import connection from "../config/database.js";

export const findSessionByToken = async (token) => {
  const sessionResult = await connection.query(
    `
    SELECT
      *
    FROM
      sessions
    WHERE
      token = $1
  `,
    [token]
  );
  return sessionResult;
};

export const findEmployeeById = async (id) => {
  const employeeResult = await connection.query(
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
  return employeeResult;
};
