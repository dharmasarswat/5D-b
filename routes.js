const router = require("express").Router();
const taskController = require("./tasks.controller");

router.get("/tasks", taskController.allTasks);
router.post("/tasks", taskController.createTask);
router.post("/upload", taskController.uploadFile);

module.exports = router;
