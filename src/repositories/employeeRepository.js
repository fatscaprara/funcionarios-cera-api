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

export const findEmployeeByCompanyId = async (companyId) => {
  const employeeResult = await connection.query(
    `
    SELECT
      *
    FROM
      employees
    WHERE
      company_id = $1
    ;
  `,
    [companyId]
  );
  return employeeResult;
};

export const insertEmployee = async ({
  name,
  number_phone,
  salary,
  pix_key,
  pix_type,
  department,
  company_id,
}) => {
  return await connection.query(
    `
    INSERT INTO
      employees (name, number_phone, salary, pix_key, pix_type, department, company_id)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7)
  ;`,
    [name, number_phone, salary, pix_key, pix_type, department, company_id]
  );
};

export const deleteEmployeeById = async (id) => {
  return await connection.query(
    `
    DELETE FROM
      employees
    WHERE
      id = $1
    ;
    `,
    [id]
  );
};

export const updateEmployeeById = async ({
  name,
  number_phone,
  salary,
  pix_key,
  pix_type,
  department,
  id,
}) => {
  return await connection.query(
    `
    UPDATE
      employees
    SET
      name = $1,
      number_phone = $2,
      salary = $3,
      pix_key = $4,
      pix_type = $5,
      department = $6
    WHERE
      id = $7
    ;`,
    [name, number_phone, salary, pix_key, pix_type, department, id]
  );
};
