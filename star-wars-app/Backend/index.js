const express = require('express');
const dao = require("./mongo-dao");

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
console.timeLog("server starting on port: " + port);
app.listen(port);

app.get('/people', (req, res) => {
    // check if id is correct in req.params.id
    dao.findAllPeople((err, people) => {
        if(people !== undefined){
            console.log("index.js all people: " + people)
            res.send(people);
        } else {
            res.statusCode = 500;
            res.end;
        }
    });
});