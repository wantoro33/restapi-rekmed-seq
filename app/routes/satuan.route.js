module.exports = (app) => {
  const satuan = require("../controllers/satuan.controller.js");

  var router = require("express").Router();

  // Retrieve all satuan
  router.get("/", satuan.findAll);

  // Retrieve a single satuan with id
  router.get("/:ID_SATUAN", satuan.findOne);

  app.use("/api/satuan", router);
};
