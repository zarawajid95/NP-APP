/* eslint-disable */
'use strict';

const User = require('../models/user');

exports.find = function(req, res) {
  const username = req.body.username
  const password = req.body.password
  User.find(username, password, function(err, user) {
    console.log(' finding user')
  if (err){
      console.log(err);
  }
  else if(user == 'NOT_FOUND'){
    res.json(user);
  }
  else{
    console.log(user)
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      '*'
    )
    res.cookie('UserID', user, {
      httpOnly: false,
      sameSite:'none',
      secure: true
    })
    res.json(user);
  }
  });
};

exports.register = function (req, res) {
  console.log(" inside register route")
  console.log(req.body);
  const user = new User(req.body);
  User.register(user, function(err, user) {
      if (err){
        console.log(err);
      }
      else{
      // var cookie = getcookie(req.headers.cookie)
      // console.log(cookie)
      console.log(user)
      res.json(user);
      }
  });
};

exports.getUsername = async (req, res) => {
  console.log("came in get user name controller")
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  User.getUsername(user_id, function(err, dst) {
    if(!err){
      console.log(dst);
      res.json(dst)
    }
  });
}

function getcookie(cookie) {
  return cookie.split('; ');
}

function getIdfromcookie(cookie) {
  return cookie.split('=')[1];
}