"use strict";

module.exports = (sequelize, DataTypes) => {
  const Proveedores = sequelize.define(
    "Proveedores",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      biografia: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "proveedores",
    }
  );

  Proveedores.associate = function (models) {
    Proveedores.hasMany(models.ProductosServicios, {
      foreignKey: "fk_proveedores",
      as: "productos_servicios",
    });
  };

  return Proveedores;
};


