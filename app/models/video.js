module.exports = function(sequelize, Sequelize){
    const Video = global.sequelize.define('video', {
        id: {
          autoIncrement: true,
          primaryKey: true,
          type: global.DataTypes.INTEGER
        },
        title: {
          type: global.DataTypes.TEXT
        },
        url: {
          type: global.DataTypes.TEXT
        },
        added: {
          type: global.DataTypes.DATE
        },
        channel: {
          type: global.DataTypes.STRING
        },
        watched: {
          type: global.DataTypes.INTEGER
        },
        payed: {
          type: global.DataTypes.INTEGER
        }
      });
    return Video;
  }
