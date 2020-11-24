module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GED_DOCUMENT', {
    ID_DOCUMENT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      EXTENTION: {
      type: DataTypes.STRING,
      allowNull: false
      },
      Upload: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ID_NATURE_DOCUMENT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'GED_NATURE_DOCUMENT',
          key: 'ID_NATURE_DOCUMENT'
        }
      },
      ID_OPERATEUR_CREATION: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'USER',
          key: 'ID_OPERATEUR_CREATION'
        }
      },
      ID_SOUS_GROUPE_DOCUMENT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'GED_SOUS_GROUPE_DOCUMENT',
          key: 'ID_SOUS_GROUPE_DOCUMENT'
        }
      },
      DATE_HEURE_AJOUT: {
        type: DataTypes.STRING,
        allowNull: false
      },
      REF: {
        type: DataTypes.STRING,
        allowNull: false
      }
      
}, 
{
  tableName: 'GED_DOCUMENT',
  timestamps: false
});

};









