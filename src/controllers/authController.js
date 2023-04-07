import bcrypt from "bcrypt";
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
