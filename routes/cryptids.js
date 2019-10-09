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










//import files
module.exports = router;