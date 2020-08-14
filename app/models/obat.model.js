module.exports = (sequelize, Sequelize) => {
  const Obat = sequelize.define(
    "masterobat",
    {
      ID_OBAT: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      NAMAOBAT: {
        type: Sequelize.STRING,
      },
      STOK: {
        type: Sequelize.FLOAT,
      },
      HAPUS: {
        type: Sequelize.STRING,
      },
      ID_SATUAN: {
        type: Sequelize.INTEGER,
      },
      CODE_OBAT: {
        type: Sequelize.STRING,
      },
      HARGA: {
        type: Sequelize.FLOAT,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Obat;
};
