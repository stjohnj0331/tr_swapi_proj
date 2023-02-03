const mongodb = require("mongodb"); //mongo client library
const url = "monogb://localhost:27017/swapi_api";
let dbPool; //database connection

mongodb.MongoClient.connect(url, function(err, db){
    if(!err){
        dbPool = db;
    } else {
        console.log("DB CONNECTION FAILED. Is database running?");
    }
});

// retrieve all people
module.exports.findAllPeople = function(callback) {
    var col = dbPool.collection("people");
    col.find()
        .toArray((err, data) => {
            if(!err){
                callback(null, people);
            } else {
                callback("failed to find people", undefined);
            }
        });
};