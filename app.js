const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");

// create express app
const app = express();

// add middleware to allow file uploading
app.use(
  fileupload({
    createParentPath: true,
  })
);

// enable cors and other commonly used middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function init(routes, port) {
  // register routes
  app.use(routes);

  //   start application on given port
  app.listen(port, () => console.log(`Server started on port ${port}`));
}

module.exports = { init };
