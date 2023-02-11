const zod = require("zod");

const taskInputSchema = zod.object({
  taskName: zod.string(),
  serverUrl: zod.string().url(),
  method: zod.enum(["get", "post", "put", "delete"]),
  description: zod.string(),
  envFile: zod.string(),
  testFile: zod.string(),
});

module.exports = { taskInputSchema };
