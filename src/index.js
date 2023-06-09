import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import employeeRouter from "./routes/employeeRouter.js";
import authRouter from "./routes/authRouter.js";

const server = express();
server.use(express.json());
server.use(cors());
server.use(authRouter);
server.use(employeeRouter);

const port = process.env.PORT;
server.listen(port, () => console.log("Server running in PORT: " + port));
