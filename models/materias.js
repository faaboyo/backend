"use strict";

module.exports = (sequelize, DataTypes) => {
  const materias = sequelize.define(
    "materias",
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
      semestre: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      profesor: {
        type: DataTypes.STRING(50), // Definir el tipo de datos para el profesor
        allowNull: false, // Indicar que no puede ser nulo
      },
      carrera: {
        type: DataTypes.STRING(50), // Definir el tipo de datos para la carrera
        allowNull: false, // Indicar que no puede ser nulo
      }
    },
    {
      timestamps: false,
      tableName: "materias",
    }
  );

  materias.getProfesores = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener los profesores
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  materias.associate = function (models) {
    materias.belongsTo(models.profesor, { // Corregimos la asociación entre materias y profesores
      foreignKey: "fk_materias", // Aquí deberías definir la clave externa correcta
      as: "materias", // Nombre de la relación
    });
  };

  return materias; // Corregimos el retorno del modelo
};