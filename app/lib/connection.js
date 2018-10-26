const config = require('../config/config');
const Sequelize = require('sequelize');

// Create instance for mysql connection
const sequelize = new Sequelize(
    config.development.config.database,
    config.development.config.username,
    config.development.config.password,
    {
      host: config.development.config.host,
      dialect: config.development.config.dialect,
      logging: false,
      freezeTableName: true,
      operatorsAliases: false,
    }
);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');

        if (config.development.sync.enable) {
            sequelize.sync({ force: !! config.development.sync.force }).then(() => {
                console.log('Connection has been established successfully.');

            }).catch(error => {
                console.error('Sync models failed:', error);
            });
        }
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });


module.exports = sequelize;
global.sequelize = sequelize;
global.DataTypes = Sequelize.DataTypes;
