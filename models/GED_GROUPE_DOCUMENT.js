module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GED_GROUPE_DOCUMENT', {
    ID_GROUPE_DOCUMENT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      TITRE: {
      type: DataTypes.STRING,
      allowNull: false
      },
      REF: {
        type: DataTypes.STRING,
        allowNull: false
      },
      DESCRIPTION: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ID_OPERATEUR_CREATION: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'USER',
          key: 'ID_OPERATEUR_CREATION'
        }
      },
      DATE_HEUR_SAISIE: {
        type: DataTypes.DATE,
        allowNull: true
      },
      CHEMAIN_PHYSIQUE: {
        type: DataTypes.STRING,
        allowNull: false
      }

}, {
  tableName: 'GED_GROUPE_DOCUMENT',
  timestamps: false
});
};









