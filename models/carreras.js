"use strict";

module.exports = (sequelize, DataTypes) => {
  const carreras = sequelize.define(
    "carreras",
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
    },
    {
      timestamps: false,
      tableName: "carreras",
    }
  );

  carreras.getMaterias = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener las materias
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  carreras.associate = function (models) {
    carreras.hasMany(models.materias, {
      foreignKey: "carrera_id", // Corregimos el nombre de la clave externa
      as: "materias", // Nombre de la relación
    });
  };

  return carreras;
};
