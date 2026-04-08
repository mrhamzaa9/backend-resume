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
const Resumeapi = require("./routes/resumeroute");
app.use("/api/auth", Authapi);
app.use("/api/resumes", Resumeapi);



const PORT = process.env.API_PORT ;
app.listen(PORT, () => {
  console.log(`API  running on ${PORT}`);
});