/* eslint-disable */
var dbConn = require('./../../config/dbConfig');

var User = function(user){
    this.username = user.username;
    this.password = user.password;
    this.email = user.email;
    this.dob = user.dob;
    this.gender = user.gender
}

User.find = function (username, password, result) {
    console.log("loging in")
    console.log(username);
    console.log(password);
    dbConn.query("Select * from user where username = ? AND password = ? ", [username, password], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            if(res){
                console.log("res is:",res);
                // if(res === []){
                //     console.log('i came in this one')
                //     result(null, 'NOT_FOUND');
                // }
                console.log('users : ', res[0]);  
                if(res[0])
                {
                    result(null, res[0].id);
                }
                else
                {
                    result(null, 'NOT_FOUND');
                }
        
            }
        }
    });   
};

User.getUsername = function (user_id, result) {
    console.log("finding username")
    const UID = parseInt(user_id);
    dbConn.query("Select * from user where id = ? ", UID, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res[0].id);  
            result(null, res[0].username);
        }
    });   
};

User.register = function(user, result) {
    console.log("++++++++++ user obj +++++++++++++++++", user)
    dbConn.query("INSERT INTO user set ?", user, function (err, res) {
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

module.exports=User;
