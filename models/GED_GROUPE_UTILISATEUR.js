module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GED_GROUPE_UTILISATEUR', {
    ID_GROUPE_UTILISATEUR: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      MOUVEMENT_DOCUMENT: {
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



}, {
  tableName: 'GED_GROUPE_UTILISATEUR',
  timestamps: false
});
};









