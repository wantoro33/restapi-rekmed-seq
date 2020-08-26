module.exports = (sequelize, Sequelize) => {
  const Satuan = sequelize.define(
    "mastersatuanobat",
    {
      ID_SATUAN: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      SATUAN: {
        type: Sequelize.STRING,
      },
      SATUAN_CODE: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Satuan;
};
