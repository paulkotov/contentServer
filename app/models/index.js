var path      = require("path");

module.exports = function(sequelize){
  let models = {
    Category: sequelize.import(path.resolve(__dirname, 'category.js')),
    Channel: sequelize.import(path.resolve(__dirname, 'channel.js')),
    Video: sequelize.import(path.resolve(__dirname, 'video.js')),
    Tag: sequelize.import(path.resolve(__dirname, 'tag.js')),
  };

  models.Category.hasMany(models.Video, {
    as: 'Videos'
  });
  models.Video.belongsTo(models.Category, {
    onDelete: 'cascade',
    foreignKey: {
        field: 'categoryId',
        allowNull: false,
    }
  });
  models.Video.belongsToMany(models.Tag, {
    as: 'Tags',
    through: 'videoTags'
  });
  models.Channel.hasMany(models.Category, {
    as: 'Categories'
  });

  return models;
};
