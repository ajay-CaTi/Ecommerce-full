const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const port = process.env.PORT || 4000;

// Handling UCAUGHT Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to Uncaught Exception`);
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connecting to db
connectDatabase();

const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

// Unhandle Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to Unhandle Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});
