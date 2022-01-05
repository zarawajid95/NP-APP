/* eslint-disable */
var dbConn = require('../../config/dbConfig');
var Restaurant = function(rst){
    this.name = rst.name;
    this.date = rst.date;
    this.address = rst.address
    this.trip_id = rst.trip_id;
}

Restaurant.saveRestaurant = function(rst, user_id, result){
    console.log("++++++++++ rest obj +++++++++++++++++", rst)
    const UID = parseInt(user_id)
    rst['user_id'] = UID 
     
    dbConn.query("INSERT INTO restaurant set ?", rst, function (err, res) {
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

module.exports = Restaurant;