const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "bookstore",
    });
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = databaseConnection;
