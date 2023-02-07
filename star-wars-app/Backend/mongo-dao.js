const mongodb = require("mongodb"); //mongo client library
const url = "mongodb://localhost:27017/swapi";
let dbPool; //database connection

mongodb.MongoClient.connect(url, function(err, db){
    if(!err){
        dbPool = db.db('swapi');
    } else {
        console.log("DB CONNECTION FAILED. Is database running?");
    }
});

// retrieve all people
// using the skip and limit i need to tie in pagination by passing in the value
module.exports.findAllPeople = function(callback, value) {
    var col = dbPool.collection("people");
    col.find()//.skip(0).limit(20)
        .toArray((err, people) => {
            if(!err){
                callback(null, people);
            } else {
                callback("failed to find people", undefined);
            }
        });
};

module.exports.findAllFilms = function(callback) {
    var col = dbPool.collection("films");
    col.find()
        .toArray((err, films) => {
            if(!err){
                callback(null, films);
            } else {
                callback("failed to find films", undefined);
            }
        });
};

module.exports.findAllPlanets = function(callback) {
    var col = dbPool.collection("planets");
    col.find()
        .toArray((err, planets) => {
            if(!err){
                callback(null, planets);
            } else {
                callback("failed to find planets", undefined);
            }
        });
};