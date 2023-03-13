const mongoose = require("mongoose");

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
// if (env === "development") {
//   mongoose.set("debug", true);
// }

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";
exports.connect = () => {
  mongoose
    .connect(uri)
    .then(() => console.log("mongoDB successfully connected"));
  return mongoose.connection;
};