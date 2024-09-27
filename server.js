const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/mainRoutes");


dotenv.config();
const app = express();
const {connectDb }= require("./config/db");
const { PORT, MONGO_URI } = process.env;
connectDb(MONGO_URI);

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use("/", userRoutes);


const port = PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
