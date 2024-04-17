import express from "express";
import authRouter from "./routes/authRouter";
// import your database
import connectUserDB from "./connections/userDB";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use(authRouter);
app.use(cookieParser());
// to connect my databse
connectUserDB();
dotenv.config();
