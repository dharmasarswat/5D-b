const Task = require("./task.model.js");
const validate = require("./utils/validate");

async function allTasks(_, res) {
  const tasks = await Task.find({});
  res.send(tasks);
}

async function createTask(req, res) {
  const task = req.body;
  if (!validate.taskInputSchema.safeParse(task).success) {
    res.status(422).send({
      message: "All fields must be filled!",
    });
  } else {
    const statues = ["Running", "Pending", "Failed", "Passed"];
    let newTask = await Task.create({
      ...task,
      timeTaken: Math.round(Math.random() * 10),
      status: statues[Math.round(Math.random() * 3)],
    });
    res.send(newTask);
  }
}

async function uploadFile(req, res) {
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
        res.status(422).send({
          status: "failed",
          message: "Invalid file type",
        });
      else {
        await file.mv("./uploads/" + file.name);

        const fileName =
          req.protocol +
          "://" +
          req.get("host") +
          req.originalUrl +
          "/" +
          file.name;

        res.send({
          status: "success",
          message: "File is uploaded",
          name: fileName,
          mimetype: file.mimetype,
          size: file.size,
        });
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { allTasks, createTask, uploadFile };
