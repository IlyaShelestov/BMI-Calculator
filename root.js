const express = require("express");
const app = express();
const port = 3000;

const bmiRoute = require("./routes/bmiRoute.js");
const homeRoute = require("./routes/homeRoute.js");

app.use(express.static("public"));

app.use("/", homeRoute);
app.use("/bmicalculator", bmiRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
