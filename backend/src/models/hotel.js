/* eslint-disable */
var dbConn = require('../../config/dbConfig');
var Hotel = function(hotel){
    this.name = hotel.name;
    this.start_date = hotel.startDate;
    this.end_date = hotel.endDate;
    this.rent = hotel.rent;
    this.address = hotel.address;
    this.booking_code = hotel.bookingCode;
    this.trip_id = hotel.trip_id;
}

Hotel.saveHotel = function(hotel, user_id, result){
    console.log("++++++++++ hotel obj +++++++++++++++++", hotel)
    const UID = parseInt(user_id)
    hotel['user_id'] = UID 
     
    dbConn.query("INSERT INTO hotel set ?", hotel, function (err, res) {
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

module.exports = Hotel;