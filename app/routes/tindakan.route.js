module.exports = (app) => {
  const tindakan = require("../controllers/tindakan.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tindakan.create);

  // Retrieve all Tutorials
  router.get("/", tindakan.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:ID_TINDAKAN", tindakan.findOne);

  // Update a Tutorial with id
  router.put("/:ID_TINDAKAN", tindakan.update);

  // Delete a Tutorial with id
  router.delete("/:ID_TINDAKAN", tindakan.delete);

  // Delete all Tutorials
  router.delete("/", tindakan.deleteAll);

  app.use("/api/tindakan", router);
};
