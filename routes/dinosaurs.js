//holds all routes for dinosaurs 
const express = require('express');
const router = express.Router(); // b/c router file
//fs stands for file system
const fs = require('fs');


router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
        //read contents of dinosaurs into var dino
    var dinoData = JSON.parse(dinos);
    //res.json(dinoData);    // testing 
    res.render('dinosaurs/index', {dinos: dinoData}); // key called dino, carry value of whatever's in dinoData. Have array of object rendering it into dinosaurs/index, within that you're forEaching over dino Key, render into list item with it's name and type printed out. Context of file copied into ejs engine, put into body, put into page, response sent to server 
});
//once created this, import into 'server' (line 21)

//import files 
module.exports = router;