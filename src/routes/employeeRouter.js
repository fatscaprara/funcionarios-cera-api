import express from "express";
import {
  deleteEmployee,
  getAllEmployee,
  insertOneEmployee,
} from "../controllers/employeeController.js";
import { employeeDataValidade } from "../middlewares/employeeValidadeMiddleware.js";
import { employeeExist } from "../middlewares/employeeExistMiddleware.js";
import { authRoutesValidation } from "../middlewares/authRoutesValidationMiddlewares.js";

const router = express.Router();
router.use(authRoutesValidation);
router.get("/employees", getAllEmployee);
router.post("/employees", employeeDataValidade, insertOneEmployee);
router.delete("/employees/:id", employeeExist, deleteEmployee);
router.update("/employees/:id", employeeExist, updateEmployee);

export default router;
