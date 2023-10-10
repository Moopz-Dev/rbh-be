const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const parser = require("body-parser");
const { sequelize } = require("./models/index");
// require("dotenv").config();

const { readdirSync } = require("fs");
app = express();

//middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(parser.json());

// sequelize
//   .sync()
//   .then((result) => console.log(result))
//   .catch((err) => console.log("EEEERRRROOOOOOR", err));
//routes
readdirSync("./routes").map((file) =>
  app.use("/api/", require("./routes/" + file))
);

//error handling
app.use((req, res) => {
  res.status(404).json({ message: "resource not found on this server" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const port =
  //  process.env.PORT ||
  8000;

app.listen(port, () => {
  console.log(`App listening on porttt ${port}`);
});
