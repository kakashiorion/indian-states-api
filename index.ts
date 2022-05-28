import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
// import * as dotenv from "dotenv";
import statesRouter from "./routes/statesRouter";

require("dotenv").config({ path: "./.env" });

const url = process.env.MONGO_URL!;
const PORT = process.env.PORT;
const app = express();

mongoose.connect(url);
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
    credentials: true,
  })
);
app.use("/states", statesRouter);

app.get("/", (req: Request, res: Response) => {
  res.json("Welcome to Indian States API!");
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
