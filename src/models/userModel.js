module.exports = (sequelize, type) => {
    return sequelize.define('users', {
      id: {
        type: type.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nameuser: {
        type: type.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      emailuser: {
        type: type.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      passworduser: {
        type: type.STRING,
        primaryKey: false,
        autoIncrement: false,
        allowNull: false,
      },
      statususer: {
        type: type.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        allowNull: true,
      }  
    }, {
      freezeTableName: true,
      tableName: 'users'
    })
  }