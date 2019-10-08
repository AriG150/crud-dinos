//holds all routes for dinosaurs 
const express = require('express');
const router = express.Router(); // b/c router file
//fs stands for file system
const fs = require('fs');


router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
        //read contents of dinosaurs into var dino
    var dinoData = JSON.parse(dinos);
    res.json(dinoData);
});
//once created this, import into 'server' (line 21)

//import files 
module.exports = router;