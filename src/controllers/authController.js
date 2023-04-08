import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import connection from "../config/database.js";

export const signUp = async (req, res) => {
  const { name, cnpj, email, password } = req.company;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await connection.query(
      `
      INSERT INTO
        companies (name, cnpj, email, password)
      VALUES
        ($1, $2, $3, $4)
      ;
    `,
      [name, cnpj, email, hashPassword]
    );

    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const signIn = async (req, res) => {
  console.log("a0");
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(401);
  console.log("a1");

  try {
    const { rows } = await connection.query(
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

    const company = rows[0];

    const passwordIsCorrect = bcrypt.compareSync(password, company?.password);

    if (!company || !passwordIsCorrect) return res.sendStatus(401);

    const token = uuid();

    await connection.query(
      `
      INSERT INTO
        sessions (token, company_id)
      VALUES
        ($1, $2)
      ;
    `,
      [token, company.id]
    );

    console.log("a2");
    res.send(token);
  } catch (err) {
    console.log("a3");

    return res.status(500).send(err);
  }
};
