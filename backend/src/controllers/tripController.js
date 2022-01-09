/* eslint-disable */
'use strict';
const Trip = require('../models/trip');
const Attraction = require('../models/attraction');
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Note = require('../models/notes');
const Budget = require('../models/budget');

exports.TripInfo = function(req, res) {
 console.log('i came in trip controller')
 const trip_id = req.query.id
 const user_id = getIdfromcookie(req.headers.cookie)
 Trip.tripInfo(user_id, trip_id, function(err, dst) {
    if(!err){
      console.log(dst);
      res.json(dst)
    }
  });
};

exports.info = function(req, res) {
  console.log('i came in info controller')
  const info = req.query.info
  const trip_id = req.query.id
  const user_id = getIdfromcookie(req.headers.cookie)
  Trip.getInfo(info, user_id, trip_id, function(err, dst) {
     if(!err){
       console.log(dst);
       res.json(dst)
     }
   });
 };


 exports.deleteEntry = function(req, res) {
  console.log('i came in delete Entry controller')
  const table = req.query.table
  const trip_id = req.query.trip_id
  const id = req.query.id
  const user_id = getIdfromcookie(req.headers.cookie)
  Trip.deleteEntry(table, user_id, id, trip_id, function(err, dst) {
     if(!err){
       console.log(dst);
       res.json(true)
     }
   });
 };

exports.saveAttraction = async (req, res) => {
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  console.log("req body", req.body);
  const attraction = new Attraction(req.body)
  Attraction.saveAttraction(attraction, user_id, function(err, attr) {
    if(!err){
      console.log(attr);
      res.json(attr)
    }
  });
}

exports.saveHotel = async (req, res) => {
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  console.log("req body", req.body);
  const hotel = new Hotel(req.body)
  Hotel.saveHotel(hotel, user_id, function(err, attr) {
    if(!err){
      console.log(attr);
      res.json(attr)
    }
  });
}

exports.saveRestaurant = async (req, res) => {
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  console.log("req body", req.body);
  const rst = new Restaurant(req.body)
  Restaurant.saveRestaurant(rst, user_id, function(err, rst) {
    if(!err){
      console.log(rst);
      res.json(rst)
    }
  });
}

exports.saveNote = async (req, res) => {
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  console.log("req body", req.body);
  const note = new Note(req.body)
  Note.saveNote(note, user_id, function(err, note) {
    if(!err){
      console.log(note);
      res.json(note)
    }
  });
}

exports.saveBudget = async (req, res) => {
  const user_id = getIdfromcookie(req.headers.cookie)
  console.log("user id", user_id)
  console.log("req body", req.body);
  const budget = new Budget(req.body)
  Budget.saveBudget(budget, user_id, function(err, note) {
    if(!err){
      console.log(note);
      res.json(note)
    }
  });
}

function getIdfromcookie(cookie) {
    return cookie.split('=')[1];
}
