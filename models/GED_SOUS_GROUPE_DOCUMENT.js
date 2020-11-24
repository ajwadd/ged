module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GED_SOUS_GROUPE_DOCUMENT', {
    ID_SOUS_GROUPE_DOCUMENT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      TITRE: {
      type: DataTypes.STRING,
      allowNull: false
      },
      DESCRIPTION: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ID_GROUPE_DOCUMENT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'GED_GROUPE_DOCUMENT',
          key: 'ID_GROUPE_DOCUMENT'
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
      DATE_HEUR_CREATION: {
        type: DataTypes.DATE,
        allowNull: true
      },
      CHEMAIN_PHYSIQUE: {
        type: DataTypes.STRING,
        allowNull: false
      },
      REF: {
        type: DataTypes.STRING,
        allowNull: false
      }


}, {
  tableName: 'GED_SOUS_GROUPE_DOCUMENT',
  timestamps: false
});
};









