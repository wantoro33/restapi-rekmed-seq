module.exports = (sequelize, Sequelize) => {
  const Tindakan = sequelize.define(
    "mastertindakan",
    {
      ID_TINDAKAN: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      NAMATINDAKAN: {
        type: Sequelize.STRING,
      },
      HAPUS: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Tindakan;
};
