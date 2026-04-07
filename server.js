const express = require("express");
const mongoose = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();




const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// routes

const Authapi = require("./routes/authroute");


app.use("/api/auth", Authapi);
const PORT = process.env.API_PORT ;
app.listen(PORT, () => {
  console.log(`API  running on ${PORT}`);
});