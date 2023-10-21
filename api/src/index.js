require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { sequelize, dbInit } = require("./db");

const { errorHandler } = require("./middlewares/errors/errors");

// Routers
// const exampleRouter = require("./web/example");
const userRouter = require("./web/users");

const corsOptions = {
  origin: process.env.APP_DOMAIN || "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};
const port = process.env.PORT || 3000;

function initializeApp() {
  const app = express();

  /*
   * Middlewares
   */
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
  app.use(cors(corsOptions));

  /*
   * Routes
   */

  app.get("/health-check", async (req, res) => {
    res.status(200).send("Stable");
  });

  app.use("/users", userRouter);

  // Error middlewares
  app.use(errorHandler);

  return app;
}

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Conexión establecida");
    await dbInit(); // Sincroniza la base de datos antes de iniciar el servidor
    console.log("Base de datos sincronizada.");
    const app = initializeApp();

    app.listen(port, () => {
      console.log(`Api listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
  }
}

if (process.env.NODE_ENV !== "test") {
  startServer();
}

module.exports = initializeApp;
