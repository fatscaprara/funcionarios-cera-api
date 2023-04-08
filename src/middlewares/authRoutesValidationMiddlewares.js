import connection from "../config/database.js";

export const authRoutesValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
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

    const session = sessionResult.rows[0];

    if (!session) return res.sendStatus(401);

    const companyResult = await connection.query(
      `
        SELECT
          *
        FROM
          companies
        WHERE
          id = $1
    ;`,
      [session.company_id]
    );

    const company = companyResult.rows[0];

    if (!company) return res.sendStatus(401);

    delete company.password;
    req.company = company;
    next();
  } catch (err) {
    return res.status(500).send(err);
  }
};
