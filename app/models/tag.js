module.exports = function(sequelize, Sequelize){
    const Tag = global.sequelize.define('tag', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: global.DataTypes.INTEGER
        },
        name: {
          type: global.DataTypes.TEXT
        }
      });
    return Tag;
  }
