const express    = require('express'),
app        = express(),
path = require('path'),
// var passport   = require('passport')
session    = require('express-session'),
bodyParser = require('body-parser'),
env        = require('dotenv').load(),
flash = require('express-flash'),
http = require('http');

//db
const sequelize = require('./app/lib/connection');

//Models
const models = require("./app/models")(sequelize);

//Routes
const routes = require('./app/routes');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true, cookie: {secure: 'mushroom'}})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

//Template engine
app.set('models', models);
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/public/dist')));

//Use routes
app.use(routes);

//Server
const server = http.createServer(app);

server.listen(5000);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    let bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

function onListening() {
  let addr = server.address();
    let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
  
// //load passport strategies
// require('./app/config/passport/passport.js')(passport,models.user);
