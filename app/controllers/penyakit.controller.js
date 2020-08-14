const db = require("../models");
const Penyakit = db.penyakit;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.KODEPENYAKIT) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const penyakit = {
    KODEPENYAKIT: req.body.KODEPENYAKIT,
    NAMAPENYAKIT: req.body.NAMAPENYAKIT,
    AKTIF: req.body.AKTIF,
  };

  // Save Tutorial in the database
  Penyakit.create(penyakit)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the data penyakit.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const NAMAPENYAKIT = req.query.NAMAPENYAKIT;
  const KODEPENYAKIT = req.query.KODEPENYAKIT;
  var condition =
    NAMAPENYAKIT || KODEPENYAKIT
      ? {
          [Op.or]: [
            { NAMAPENYAKIT: { [Op.like]: `%${NAMAPENYAKIT}%` } },
            { KODEPENYAKIT: { [Op.like]: `%${KODEPENYAKIT}%` } },
          ],
        }
      : null;

  Penyakit.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data penyakit.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const ID_PENYAKIT = req.params.ID_PENYAKIT;

  Penyakit.findByPk(ID_PENYAKIT)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving data penyakit with id=" + ID_PENYAKIT,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const ID_PENYAKIT = req.params.ID_PENYAKIT;

  Penyakit.update(req.body, {
    where: { ID_PENYAKIT: ID_PENYAKIT },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Data penyakit was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update data penyakit with id=${ID_PENYAKIT}. Maybe data penyakit was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data penyakit with id=" + ID_PENYAKIT,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_PENYAKIT = req.params.ID_PENYAKIT;

  Penyakit.destroy({
    where: { ID_PENYAKIT: ID_PENYAKIT },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data penyakit was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete data penyakit with id=${ID_PENYAKIT}. Maybe data penyakit was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data penyakit with id=" + ID_PENYAKIT,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Penyakit.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} data penyakit were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all data penyakit.",
      });
    });
};
