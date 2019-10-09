//hold all routes for cryptids 

const express = require('express');
const router = express.Router(); // b/c router file
const fs = require('fs'); //fs stands for file system

//SHOW all cryptids
router.get('/', function(req, res) {
    var cryptids = fs.readFileSync('./cryptids.json'); // read contents of cryptids.json into var cryptids
    var cryptidData = JSON.parse(cryptids); // converted to JS data type 
    res.render('cryptids/index', {cryptids: cryptidData}); //// key called cryptids, carry value of whatever's in CryptidData. Have array of object rendering it into cryptids/index, within that you're forEaching over cryptid Key, render into list item with it's name and type printed out. Context of file copied into ejs engine, put into body, put into page, response sent to server 
    console.log(cryptids);
});

//CREATE new cryptid from form 
// push new data into array, write result back to file, redirect to index 
router.post('/', function(req, res) {
    var cryptids = fs.readFileSync('./cryptids.json');
    var cryptidData = JSON.parse(cryptids);
    cryptidData.push(req.body);
    fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData));
    res.redirect('/cryptids');
})


//GET/SHOW a form 
router.get('/new', function(req, res) {
    res.render('cryptids/new');
});

//SHOW one cryptid
router.get('/:id', function(req, res) {
    var index = parseInt(req.params.id); //this is a string
    var cryptids = fs.readFileSync('./cryptids.json'); 
    var cryptidData = JSON.parse(cryptids);
    res.render('cryptids/show', {cryptids: cryptidData[index], cryptidIndex: index})
});








//import files
module.exports = router;