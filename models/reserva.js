"use strict";

module.exports = (sequelize, DataTypes) => {
  const reserva = sequelize.define(
    "reserva",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: { // Cambiado de firstName a nombre
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      descripcion: { // Cambiado de lastName a descripcion
        allowNull: false,
        type: DataTypes.TEXT,
      },
      precio: { // Cambiado de email a precio
        allowNull: false,
        type: DataTypes.FLOAT,
      },
    },
    {
      timestamps: false,
      tableName: "reserva",
    }
  );

  return reserva;
};

