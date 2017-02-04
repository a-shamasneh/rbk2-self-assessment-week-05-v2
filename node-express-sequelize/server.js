var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });
var router  = express.Router();/////  for handel request
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */

router.get('/users', function(req, res) {
User.findOne().then(function (user) {
    console.log(User.get('username'));
});
});




module.exports = { 
  app: app,
  User: User
};
