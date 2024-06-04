"use strict";

module.exports = (sequelize, DataTypes) => {
  const Eventos = sequelize.define(
    "Eventos",
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
      tableName: "eventos",
    }
  );

  Eventos.associate = function (models) {
    Eventos.belongsTo(models.ProductosServicios, {
      foreignKey: "fk_productos_servicios",
      as: "productos_servicios",
    });
  };

  return Eventos;
};
