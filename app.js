import "dotenv/config";
import express from 'express';
import cors from "cors";
import mongoose from "mongoose";
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
UserRoutes(app);
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000)