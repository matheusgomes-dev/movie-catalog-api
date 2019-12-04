const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes");
const mongoose = require("mongoose");

dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
