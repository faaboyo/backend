"use strict";

module.exports = (sequelize, DataTypes) => {
  const lecciones = sequelize.define(
    "lecciones",
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
    { // Corregido: Los atributos adicionales deben ir dentro del objeto de configuración
      timestamps: false,
      tableName: "lecciones",
    }
  );

  lecciones.getsecciones = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener las secciones
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  lecciones.associate = function (models) {
    lecciones.belongsTo(models.secciones, { // Corregimos la asociación entre lecciones y secciones
      foreignKey: "fk_seccion", // Corregimos el nombre de la clave externa
      as: "seccion", // Nombre de la relación
    });
  };

  return lecciones; // Corregimos el retorno del modelo
};

