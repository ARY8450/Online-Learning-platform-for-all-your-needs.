var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"NO",
    database:"logininfo"
});

con.connect(function(error){
    if(error) {
        console.log(error);
    }else{
        console.log("connected");
    }
    
})