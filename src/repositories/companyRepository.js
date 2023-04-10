import connection from "../config/database.js";

export const findCompanyById = async (id) => {
  const companyResult = await connection.query(
    `
      SELECT
        *
      FROM
        companies
      WHERE
        id = $1
  ;`,
    [id]
  );
  return companyResult;
};

export const insertCompany = async ({ name, cnpj, email, hashPassword }) => {
  return await connection.query(
    `
    INSERT INTO
      companies (name, cnpj, email, password)
    VALUES
      ($1, $2, $3, $4)
    ;
  `,
    [name, cnpj, email, hashPassword]
  );
};

export const findCompanyByEmail = async (email) => {
  const companyResult = await connection.query(
    `
    SELECT
      *
    FROM
      companies
    WHERE
      email = $1
    ;
  `,
    [email]
  );
  return companyResult;
};

export const insertSession = async ({ token, company_id }) => {
  return await connection.query(
    `
    INSERT INTO
      sessions (token, company_id)
    VALUES
      ($1, $2)
    ;
  `,
    [token, company_id]
  );
};
