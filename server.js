// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const Data = require("./models/Data.js");

// app.use(express.json());

// const url = "mongodb+srv://anasshabib30:Shabib@shabib-store.iafhvij.mongodb.net/?appName=shabib-store";

// mongoose.connect(url)
//   .then(() => console.log("connected to database (mongooseDB)"))
//   .catch(err => console.log("Error with connecting to database", err));

// app.get("/get", (req, res) => {
//   res.send("hello");
// });

// app.post("/post", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const data = new Data({
//       name,
//       email,
//       password,
//     });

//     console.log("Received:", data);

//     await data.save();     // 🟢 لازم الأول
//     res.send("Data saved"); // 🟢 بعد save

//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Error saving data");
//   }
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
