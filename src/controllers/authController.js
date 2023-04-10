import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import {
  findCompanyByEmail,
  insertCompany,
  insertSession,
} from "../repositories/companyRepository.js";

export const signUp = async (req, res) => {
  const { name, cnpj, email, password } = req.company;

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    await insertCompany({ name, cnpj, email, hashPassword });

    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.sendStatus(401);
  try {
    const { rows } = await findCompanyByEmail(email);

    const company = rows[0];

    const passwordIsCorrect = bcrypt.compareSync(password, company?.password);

    if (!company || !passwordIsCorrect) return res.sendStatus(401);

    const token = uuid();

    await insertSession({ token, company_id: company.id });

    res.send(token);
  } catch (err) {
    return res.status(500).send(err);
  }
};
