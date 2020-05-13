module.exports = (sequelize, type) => {
  return sequelize.define('items', {
    id: {
      type: type.SMALLINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    iduser: {
      type: type.INTEGER,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    nameitem: {
      type: type.STRING,
      primaryKey: false,
      autoIncrement: false,
      allowNull: false,
    }
  }, {
    freezeTableName: true,
    tableName: 'items'
  })
}