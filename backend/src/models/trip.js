/* eslint-disable */
var dbConn = require('./../../config/dbConfig');
var Trip = function(trip){
    this.destination = trip.destination;
    this.start_date = trip.startDate;
    this.end_date = trip.endDate;
}

Trip.saveDestination = function(trip, user_id, result){
    console.log("++++++++++ trip obj +++++++++++++++++", trip)
    const UID = parseInt(user_id)
    trip['user_id'] = UID 
    dbConn.query("INSERT INTO trip set ?", trip, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res.insertId);
        }
    });  
}

Trip.getDestination = function(user_id, result){
    const UID = parseInt(user_id)
    dbConn.query("select id, destination from trip where user_id = ?", UID, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });  
}

Trip.tripInfo = function(user_id, trip_id, result){
    const UID = parseInt(user_id)
    const TID = parseInt(trip_id)
    dbConn.query("select * from trip where user_id = ? AND id = ?", [UID, TID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null, res);
        }
    });  
}

Trip.getInfo = function(info, user_id, trip_id, result){
    const UID = parseInt(user_id)
    const TID = parseInt(trip_id)
    console.log(user_id)
    console.log(trip_id)
    console.log(info)
    dbConn.query("select * from "+info+" where user_id = ? AND trip_id = ?",[UID, TID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("response",res);
            result(null, res);
        }
    });  
}

Trip.deleteEntry = function(table, user_id, id, trip_id, result){
    const UID = parseInt(user_id)
    const TID = parseInt(trip_id)
    const ID = parseInt(id)
    console.log(user_id)
    console.log(trip_id)
    console.log(table)
    console.log(id)
    dbConn.query("delete from "+table+" where user_id = ? AND trip_id = ? AND id= ?",[UID, TID, ID], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log("response",res.insertId);
            result(null, res.insertId);
        }
    });  
}
module.exports = Trip;