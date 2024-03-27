import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mailRouter from "./api/mailRouter.js";
config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/mail", mailRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
