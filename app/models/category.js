module.exports = function(sequelize, Sequelize){
  const Category = global.sequelize.define('category', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: global.DataTypes.INTEGER
      },
      title: {
        type: global.DataTypes.TEXT
      }
    });
  return Category;
}
