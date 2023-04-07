import express from "express";
import { companyValidade } from "../middlewares/companyValidadeMiddleware.js";
import { signUp } from "../controllers/authController.js";

const router = express.Router();
router.post("/companies", companyValidade, signUp);

export default router;

// {
//   name: "Plataforma CERA",
//   cnpj: "12456",
//   email: "plataformacera@gmail.com",
//   password: "1234"
// }
