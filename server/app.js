const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const passport = require("passport");
const httpStatus = require("http-status");
const config = require("./src/config/config");
const { jwtStrategy } = require("./src/config/passport");
const routes = require("./src/routes");
const { errorConverter, errorHandler } = require("./src/middlewares/error");
const ApiError = require("./src/utils/ApiError");

const app = express();
if (config.env === "development") {
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(mongoSanitize());

app.use(compression());

app.use(cors());
app.options("*", cors());

app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// v1 api routes
app.use("/api", routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
