module.exports = function(sequelize, Sequelize){
    const Channel = global.sequelize.define('comment', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: global.DataTypes.INTEGER
        },
        name: {
          type: global.DataTypes.TEXT
        },
        categoryId: {
          type: global.DataTypes.INTEGER
        }
      });
    return Channel;
  }
