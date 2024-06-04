"use strict";

module.exports = (sequelize, DataTypes) => {
  const Reservas = sequelize.define(
    "Reservas",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      URL: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "reservas",
    }
  );



  return Reservas;
};

