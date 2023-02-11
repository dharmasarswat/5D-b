require("dotenv").config();

const app = require("./app");
const db = require("./db");
const routes = require("./routes");

const port = process.env.PORT || 3005;

(async () => {
  try {
    // connect to db
    await db.init();

    // start app on the given post with supplied routes
    app.init(routes, port);
  } catch (error) {
    console.log("error: ", error);
  }
})();
