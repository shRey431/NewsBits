const express = require("express");
const dbConnect = require("./configs/dbConnect");

require("dotenv").config();
const PORT = process.env.PORT || 5001;

const app = express();
const authRouter = require("./routes/authRoutes");

dbConnect();
app.use(express.json());
app.use("/api/user", authRouter);

app.listen(PORT, () => console.log("Server running on port " + PORT));
