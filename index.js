const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/config");
const cors = require("cors");
const colors = require("colors");
const path = require("path");
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware.js");
const mongoose = require("mongoose");
const Session = require("express-session");
const MongoStore = require("connect-mongo");
const { authUser } = require("./controllers/userControllers");
const UpdateController = require("./controllers/UpdateController");
const PublicData = require("./routes/DataRoute");
const fileUpload = require("express-fileupload");

mongoose.set("strictQuery", false);
dotenv.config();
connectDB();
const app = express();
app.set("view engine", "ejs");
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
  }),
);
app.use(
  Session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 60 * 60 * 1000},
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }),
);

var corsOptions = {
  credentials: true,
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());



app.post("/api/user/login", authUser);
app.get("/data", PublicData);
app.use("/update-data", UpdateController);

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("api is performing fully well...");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(
  PORT,
  console.log(`your app is listening on localhost ${PORT}`.yellow.bold),
);
