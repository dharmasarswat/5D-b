const mongoose = require("mongoose");

// remove DeprecationWarning for mongoose
mongoose.set("strictQuery", true);

const mongoUrl = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/tasks";

/**
 * connect to mongo db
 */
async function init() {
  try {
    await mongoose.connect(mongoUrl);

    console.log("Connected to db successfully!!");
  } catch (error) {
    console.log("error while connecting to mongoose: ", err);
  }
}

module.exports = { init };
