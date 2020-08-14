module.exports = (sequelize, Sequelize) => {
  const Penyakit = sequelize.define(
    "masterpenyakit",
    {
      ID_PENYAKIT: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      KODEPENYAKIT: {
        type: Sequelize.STRING,
      },
      NAMAPENYAKIT: {
        type: Sequelize.STRING,
      },
      AKTIF: {
        type: Sequelize.INTEGER,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Penyakit;
};
