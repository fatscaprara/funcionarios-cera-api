import express from "express";
import {
  deleteEmployee,
  getAllEmployee,
  insertOneEmployee,
} from "../controllers/employeeController.js";
import { employeeDataValidade } from "../middlewares/employeeValidadeMiddleware.js";
import { employeeExist } from "../middlewares/employeeExistMiddleware.js";

const router = express.Router();

router.get("/employees", getAllEmployee);
router.post("/employees", employeeDataValidade, insertOneEmployee);
router.delete("/employees/:id", employeeExist, deleteEmployee);

export default router;
