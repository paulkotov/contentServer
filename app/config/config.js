module.exports = {
    development: {
        config: {
            host: 'localhost',
            database: "OKO_Platform_contentprovider",
            username: "root",
            password: "qwe123ASD",
            dialect: "mysql"
        },
        sync: {
          enable: false,
          force: false,
        },
    },
    production:{
        config: {
            database: "OKO_Platform_contentprovider",
            username: "root",
            password: "qwe123ASD",
            dialect: "mysql"
        }
    }
};
