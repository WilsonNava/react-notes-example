require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;
const notesRoutes = require("./src/routes/notes");

const connect = async () => {
  const uri = process.env.MONGO_URL;
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection to DB stablished");
  } catch (error) {
    console.error(error);
  }
};

app.use(express.json());
app.use("/notes", notesRoutes);

app.listen(PORT, async () => {
  await connect();
  console.log(`Server running on port ${PORT}`);
});
