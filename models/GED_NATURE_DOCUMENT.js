module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GED_NATURE_DOCUMENT', {
    ID_NATURE_DOCUMENT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
      },
      NATURE_DOCUMENT: {
      type: DataTypes.STRING,
      allowNull: false
      }


}, {
  tableName: 'GED_NATURE_DOCUMENT',
  timestamps: false
});
};









