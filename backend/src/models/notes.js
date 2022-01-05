/* eslint-disable */
var dbConn = require('../../config/dbConfig');
var Note = function(n){
    this.note = n.note;
    this.trip_id = n.trip_id;
}

Note.saveNote = function(note, user_id, result){
    console.log("++++++++++ note obj +++++++++++++++++", note)
    const UID = parseInt(user_id)
    note['user_id'] = UID 
     
    dbConn.query("INSERT INTO note set ?", note, function (err, res) {
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

module.exports = Note;