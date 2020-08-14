module.exports = (app) => {
  const obat = require("../controllers/obat.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", obat.create);

  // Retrieve all Tutorials
  router.get("/", obat.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:ID_OBAT", obat.findOne);

  // Update a Tutorial with id
  router.put("/:ID_OBAT", obat.update);

  // Delete a Tutorial with id
  router.delete("/:ID_OBAT", obat.delete);

  // Delete all Tutorials
  router.delete("/", obat.deleteAll);

  app.use("/api/obat", router);
};
