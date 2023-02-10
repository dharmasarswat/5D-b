const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const mongoose = require("mongoose");
const Task = require("./task.model.js");

const app = express();

mongoose.connect(
  "mongodb+srv://test:test@lottery.pwzb7.mongodb.net/tasks?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({});
  res.send(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = req.body;
  if (
    !task.taskName ||
    !task.serverUrl ||
    !task.method ||
    !["get", "post", "put", "delete"].includes(task.method) ||
    !task.description ||
    !task.envFile ||
    !task.envFile
  ) {
    res.send({
      message: "All fields must be filled!",
    });
  } else {
    let newTask = Task.create(task);
    newTask = await newTask.save();
    res.send(newTask);
  }
  const tasks = await Task.find({});
  res.send(tasks);
});

app.post("/upload", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: "failed",
        message: "No file uploaded",
      });
    } else {
      let file = req.files.file;
      const validFileTypes = ["text/csv", "text/plain"];
      if (!validFileTypes.includes(req.files.file.mimetype))
        res.send({
          status: "failed",
          message: "Invalid file type",
        });
      else {
        await file.mv("./uploads/" + file.name);

        res.send({
          status: "success",
          message: "File is uploaded",
          data: {
            name: file.name,
            mimetype: file.mimetype,
            size: file.size,
          },
        });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Server started on port ${port}`));
