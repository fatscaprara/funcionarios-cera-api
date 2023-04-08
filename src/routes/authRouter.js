import express from "express";
import { companyValidade } from "../middlewares/companyValidadeMiddleware.js";
import { signIn, signUp } from "../controllers/authController.js";

const router = express.Router();
router.post("/sign-up", companyValidade, signUp);
router.post("/sign-in", signIn);
router.get("/oi", (req, res) => res.send("oi"));

export default router;

// {
//   name: "Plataforma CERA",
//   cnpj: "12456",
//   email: "plataformacera@gmail.com",
//   password: "1234"
// }
