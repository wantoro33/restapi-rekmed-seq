const db = require("../models");
const Satuan = db.satuan;
const Op = db.Sequelize.Op;

// Retrieve all satuan from the database.
exports.findAll = (req, res) => {
  const SATUAN = req.query.SATUAN;
  const SATUAN_CODE = req.query.SATUAN_CODE;
  var condition =
    SATUAN || SATUAN_CODE
      ? {
          [Op.or]: [
            { SATUAN: { [Op.like]: `%${SATUAN}%` } },
            { SATUAN_CODE: { [Op.like]: `%${SATUAN_CODE}%` } },
          ],
        }
      : null;

  Satuan.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data satuan.",
      });
    });
};

// Find a single satuan with an id
exports.findOne = (req, res) => {
  const ID_SATUAN = req.params.ID_SATUAN;

  Satuan.findByPk(ID_SATUAN)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving data satuan with id=" + ID_SATUAN,
      });
    });
};
