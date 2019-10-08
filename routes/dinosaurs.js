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
//once created this, import into 'server' (app.get res.render home)

router.post('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json')
    var dinoData = JSON.parse(dinos);
    dinoData.push(req.body);
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect('/dinosaurs');
})

router.get('/new', function(req, res) {
    res.render('dinosaurs/new');
})

router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/show', {dino: dinoData[index]}); 
});



//import files 
module.exports = router;