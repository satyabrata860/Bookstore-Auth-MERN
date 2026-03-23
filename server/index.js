const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
dotenv.config();
const databaseConnection = require("./config/database");
const bookRouter = require("./routes/book.routes");
const userRouter = require("./routes/user.routes");
const authMiddleWare = require("./middleware/auth.middleware");

const PORT = process.env.PORT || 3000;

// database connection
databaseConnection();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/book", authMiddleWare, bookRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Port listening on ${PORT}`);
});
