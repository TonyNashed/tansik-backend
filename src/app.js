const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/test", testRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running");
});
module.exports = app;
