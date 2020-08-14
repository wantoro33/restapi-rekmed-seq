const db = require("../models");
const Obat = db.obat;
const Op = db.Sequelize.Op;

// Create and Save a new Tindakan
exports.create = (req, res) => {
  // Validate request
  if (!req.body.NAMAOBAT) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a obat
  const obat = {
    NAMAOBAT: req.body.NAMAOBAT,
    STOK: req.body.STOK,
    HAPUS: req.body.HAPUS,
    ID_SATUAN: req.body.ID_SATUAN,
    CODE_OBAT: req.body.CODE_OBAT,
    HARGA: req.body.HARGA,
  };

  // Save obat in the database
  Obat.create(obat)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the data obat.",
      });
    });
};

// Retrieve all obat from the database.
exports.findAll = (req, res) => {
  const NAMAOBAT = req.query.NAMAOBAT;
  const CODE_OBAT = req.query.CODE_OBAT;
  var condition =
    NAMAOBAT || CODE_OBAT
      ? {
          [Op.or]: [
            { NAMAOBAT: { [Op.like]: `%${NAMAOBAT}%` } },
            { CODE_OBAT: { [Op.like]: `%${CODE_OBAT}%` } },
          ],
        }
      : null;

  Obat.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data obat.",
      });
    });
};

// Find a single Tindakan with an id
exports.findOne = (req, res) => {
  const ID_OBAT = req.params.ID_OBAT;

  Obat.findByPk(ID_OBAT)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving data obat with id=" + ID_OBAT,
      });
    });
};

// Update a obat by the id in the request
exports.update = (req, res) => {
  const ID_OBAT = req.params.ID_OBAT;

  Obat.update(req.body, {
    where: { ID_OBAT: ID_OBAT },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Data obat was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update data obat with id=${ID_OBAT}. Maybe data tindakan was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating data obat with id=" + ID_OBAT,
      });
    });
};

// Delete a obat with the specified id in the request
exports.delete = (req, res) => {
  const ID_OBAT = req.params.ID_OBAT;

  Obat.destroy({
    where: { ID_OBAT: ID_OBAT },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "data obat was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete data obat with id= ${ID_OBAT}. Maybe data obat was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete data obat with id=" + ID_OBAT,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Obat.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} data obat were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all data obat.",
      });
    });
};
