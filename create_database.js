const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const mongoDB = "mongodb://localhost:27017/my_database";
// http://localhost:27017/
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}