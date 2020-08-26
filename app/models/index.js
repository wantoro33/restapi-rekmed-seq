const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.penyakit = require("./penyakit.model.js")(sequelize, Sequelize);
db.tindakan = require("./tindakan.model.js")(sequelize, Sequelize);
db.obat = require("./obat.model.js")(sequelize, Sequelize);
db.satuan = require("./satuan.model.js")(sequelize, Sequelize);

db.satuan.hasOne(db.obat, {
  foreignKey: "ID_SATUAN",
  as: "obat",
  targetKey: "ID_SATUAN",
});
db.obat.belongsTo(db.satuan, {
  foreignKey: "ID_SATUAN",
  as: "satuan",
  targetKey: "ID_SATUAN",
});

module.exports = db;
