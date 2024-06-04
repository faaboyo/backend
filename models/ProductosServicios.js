"use strict";

module.exports = (sequelize, DataTypes) => {
  const ProductosServicios = sequelize.define(
    "ProductosServicios",
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
      apellido: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      ci: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "productos_servicios",
    }
  );

  ProductosServicios.associate = function (models) {
    ProductosServicios.belongsTo(models.Proveedores, {
      foreignKey: "fk_proveedores",
      as: "proveedores",
    });
  };

  return ProductosServicios;
};
