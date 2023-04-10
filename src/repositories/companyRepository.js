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
