const db = require("../models");
const Tindakan = db.tindakan;
const Op = db.Sequelize.Op;

// Create and Save a new Tindakan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.NAMATINDAKAN) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tindakan
  const tindakan = {
    NAMATINDAKAN: req.body.NAMATINDAKAN,
    HAPUS: req.body.HAPUS,
  };

  // Save Tindakan in the database
  Tindakan.create(tindakan)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the data tindakan.",
      });
    });
};

// Retrieve all tindakan from the database.
exports.findAll = (req, res) => {
  const NAMATINDAKAN = req.query.NAMATINDAKAN;
  var condition = NAMATINDAKAN
    ? { NAMATINDAKAN: { [Op.like]: `%${NAMATINDAKAN}%` } }
    : null;

  Tindakan.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data tindakan.",
      });
    });
};

// Find a single Tindakan with an id
exports.findOne = (req, res) => {
  const ID_TINDAKAN = req.params.ID_TINDAKAN;

  Tindakan.findByPk(ID_TINDAKAN)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving data tindakan with id=" + ID_TINDAKAN,
      });
    });
};

// Update a Tindakan by the id in the request
exports.update = (req, res) => {
  const ID_TINDAKAN = req.params.ID_TINDAKAN;

  Tindakan.update(req.body, {
    where: { ID_TINDAKAN: ID_TINDAKAN },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Data tindakan was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update data tindakan with id=${ID_TINDAKAN}. Maybe data tindakan was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data tindakan with id=" + ID_TINDAKAN,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const ID_TINDAKAN = req.params.ID_TINDAKAN;

  Tindakan.destroy({
    where: { ID_TINDAKAN: ID_TINDAKAN },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data tindakan was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete data tindakan with id= ${ID_TINDAKAN}. Maybe data tindakan was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data tindakan with id=" + ID_TINDAKAN,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tindakan.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} data tindakan were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all data tindakan.",
      });
    });
};
