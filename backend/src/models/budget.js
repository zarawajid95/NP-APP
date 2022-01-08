/* eslint-disable */
var dbConn = require('../../config/dbConfig');

var Budget = function(b){
    this.budget_val = b.budget;
    this.trip_id = b.trip_id;
}

Budget.saveBudget = function(budget, user_id, result){
    console.log("++++++++++ budget obj +++++++++++++++++", budget)
    const UID = parseInt(user_id)
    budget['user_id'] = UID 
     
    dbConn.query("INSERT INTO budget set ?", budget, function (err, res) {
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

module.exports = Budget;