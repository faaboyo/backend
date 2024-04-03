"use strict";

module.exports = (sequelize, DataTypes) => {
  const estudiantes = sequelize.define(
    "estudiantes",
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
      ci: { // Corregido: La definición de la columna 'ci' debe estar dentro del objeto de definición de columnas
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
      tableName: "estudiantes",
    }
  );

  estudiantes.getcarreras = async (params) => {
    const query = ``; // Aquí deberías definir la consulta SQL para obtener las carreras de los estudiantes
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  estudiantes.associate = function (models) {
    // Corregido: Se cambió 'profesor' por 'estudiantes' en la asociación
    estudiantes.belongsTo(models.carreras, {
      foreignKey: "fk_carrera", // Corregido: Se cambió 'fk_materia' por 'fk_carrera' para que coincida con la clave externa correcta
      as: "carrera", // Nombre de la relación
    });
  };

  return estudiantes;
};
