const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      unique: true,
      defaultValue: ""
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    elemTypes: {
      type: DataTypes.JSON,
      defaultValue: [],
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
    image: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
  });
};
