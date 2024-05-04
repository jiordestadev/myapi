import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { initialize } from "./configs/mongoose.js";

///configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

await initialize(app);
