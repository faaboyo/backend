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

  Reservas.getProductosServicios = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener las secciones
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  Reservas.associate = function (models) {
    Reservas.belongsTo(models.ProductosServicios, {
      foreignKey: "fk_productos_servicios",
      as: "productos_servicios",
    });
  };

  return Reservas;
};

