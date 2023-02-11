const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      require: true,
    },
    serverUrl: {
      type: String,
      require: true,
    },
    method: {
      type: String,
      enums: ["get", "post", "put", "delete"],
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    envFile: {
      type: String,
      require: true,
    },
    envFile: {
      type: String,
      require: true,
    },
    status: String,
    timeTaken: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tags", TaskSchema);
