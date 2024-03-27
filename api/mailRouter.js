import express from "express";
import { handleSendMail } from "./mailController.js";
const mailRouter = express.Router();

mailRouter.post("/send-mail", handleSendMail);

export default mailRouter;
