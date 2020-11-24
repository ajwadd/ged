module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    ID_OPERATEUR_CREATION: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      NOM: {
      type: DataTypes.STRING,
      allowNull: false
      },
      PRENOM: {
        type: DataTypes.STRING,
        allowNull: false
      },
      EMAIL: {
        type: DataTypes.STRING,
        allowNull: false
      },
      PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false
      },
      CREATED: {
        type: DataTypes.DATE,
        defaultvalue: DataTypes.NOW
      }
    }, {
      tableName: 'USER',
      timestamps: false
    });
    };









