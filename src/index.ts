import sendEmail from "./SendEmail.ts";
import cors from "cors";
import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post("/sendEmail", sendEmail);

const startServer = () => {
  try {
    console.log("server started");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
