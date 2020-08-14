module.exports = (app) => {
  const penyakit = require("../controllers/penyakit.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", penyakit.create);

  // Retrieve all Tutorials
  router.get("/", penyakit.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:ID_PENYAKIT", penyakit.findOne);

  // Update a Tutorial with id
  router.put("/:ID_PENYAKIT", penyakit.update);

  // Delete a Tutorial with id
  router.delete("/:ID_PENYAKIT", penyakit.delete);

  // Delete all Tutorials
  router.delete("/", penyakit.deleteAll);

  app.use("/api/penyakit", router);
};
