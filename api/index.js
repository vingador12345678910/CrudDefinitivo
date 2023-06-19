import express from "express";
import UserRoutes from "./routes/users.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());


app.use("/",UserRoutes);

app.listen(8800);