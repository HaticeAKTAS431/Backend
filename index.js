const express = require("express");
const app = express();
const port = 3000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const cors = require("cors");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

app.use(express.json()); // JSON veriyi ayrıştırmak için
app.use(express.urlencoded({ extended: true })); // URL-encoded veriyi ayrıştırmak için
app.use(cors());

// app.get("/api", (req, res) => {
//   res.send("hello ");
// });

app.use("/api", productRouter);

app.listen(port, () =>
  console.log(`Uygulama port ${port} üzerinde dinleniyor.`)
);
