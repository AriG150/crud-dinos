//holds all routes for dinosaurs 
const express = require('express');
const router = express.Router(); // b/c router file
//fs stands for file system
const fs = require('fs');

//SHOW all dino
router.get('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json');
        //read contents of dinosaurs into var dino
    var dinoData = JSON.parse(dinos);
    //res.json(dinoData);    // testing 
    res.render('dinosaurs/index', {dinos: dinoData}); // key called dino, carry value of whatever's in dinoData. Have array of object rendering it into dinosaurs/index, within that you're forEaching over dino Key, render into list item with it's name and type printed out. Context of file copied into ejs engine, put into body, put into page, response sent to server 
});
//once created this, import into 'server' (the route that says: app.get res.render home)

//CREATE new dino with POST 
router.post('/', function(req, res) {
    var dinos = fs.readFileSync('./dinosaurs.json')
    var dinoData = JSON.parse(dinos);
    dinoData.push(req.body);
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect('/dinosaurs');
})

//SHOW new Dino form 
router.get('/new', function(req, res) {
    res.render('dinosaurs/new');
})

//SHOW EDIT Form
router.get('/edit/:id', function(req, res) {
    var index = parseInt(req.params.id) // id of the parameter 
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/edit', {dino: dinoData[index], dinoIndex: index}) // object needs dino: {name: string, type: string, dinoInex: int}
})

//EDIT One Dino
router.put('/:id', function(req, res) {
    //Read the Dinos JSON file, 
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    //Update the dino at the index (req.params.id)
    dinoData[index] = req.body
    //restringify the dino details and rewriet the dinosaur.json
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    //redirect to the dino show page 
    res.redirect(`/dinosaurs/${index}`)
})

//DELETE One Dino
router.delete('/:id', function(req, res) {
    //read file, JSON Parse it, etc 
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json')
    var dinoData = JSON.parse(dinos);
    console.log(dinoData)
    //remove the dino at specified index 
    var deadDino = dinoData.splice(index, 1);
    //Restringify the dino details and rewerite the dinosaurs.json
    console.log(dinoData)
    fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData));
    res.redirect('/dinosaurs');
})

//SHOW ONE Dino 
router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id);
    var dinos = fs.readFileSync('./dinosaurs.json');
    var dinoData = JSON.parse(dinos);
    res.render('dinosaurs/show', {dino: dinoData[index], dinoIndex: index}); 
});



//import files 
module.exports = router;