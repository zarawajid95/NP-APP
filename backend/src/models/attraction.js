/* eslint-disable */
var dbConn = require('../../config/dbConfig');
var Attraction = function(attr){
    this.name = attr.name;
    this.date = attr.date;
    this.trip_id = attr.trip_id;
}

Attraction.saveAttraction = function(attr, user_id, result){
    console.log("++++++++++ attr obj +++++++++++++++++", attr)
    const UID = parseInt(user_id)
    attr['user_id'] = UID 
     
    dbConn.query("INSERT INTO attraction set ?", attr, function (err, res) {
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

module.exports = Attraction;