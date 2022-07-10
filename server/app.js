require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const notesRoutes = require("./src/routes/notes");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use("/notes", notesRoutes);

const connect = async () => {
  const uri = process.env.MONGO_URL;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to DB stablished");
  } catch (error) {
    throw new Error("Cannot connect to DB")
  }
};
app.listen(PORT, async () => {
  await connect();
  console.log(`Server running on port ${PORT}`);
});
