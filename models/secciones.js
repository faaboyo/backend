"use strict";

module.exports = (sequelize, DataTypes) => {
  const secciones = sequelize.define(
    "secciones",
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
      materia: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "secciones",
    }
  );

  secciones.getMaterias = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener las materias
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  secciones.associate = function (models) {
    secciones.belongsTo(models.materias, { // Corregimos la asociación entre secciones y materias
      foreignKey: "fk_secciones", // Corregimos el nombre de la clave externa
      as: "secciones", // Nombre de la relación
    });
  };

  return secciones; // Corregimos el retorno del modelo
};

