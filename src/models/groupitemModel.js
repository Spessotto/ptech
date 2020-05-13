module.exports = (sequelize, type) => {
    return sequelize.define('group_items', {
      id: {
        type: type.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      iditem: {
        type: type.SMALLINT,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
        references: {
            model: 'items',
            key: 'id'
        }
      },
      namegroup: {
        type: type.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      }  
    }, {
      freezeTableName: true,
      tableName: 'group_items'
    })
  }