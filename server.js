const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
const methodOverride = require('method-override')

const app = express();

//sets 'view engine': fills in the template stuff for us. View enginge read ejs code, 
//fills it all in, and sends it out to the page 
//All ejs will be found in the 'views' directory 
// ----- layouts and front end ----- //
app.set('view engine', 'ejs');
app.use(ejsLayouts);
//how to find static file (files that don't need to be rendered in any way) Where to keep files, etc. 
app.use(express.static('static')) // whenever you're trying to serve a file, and that file is making reference to css/js file, this is directory where you'll find it 

// ----- middleware ----- //
app.use(express.urlencoded({extended: false})) //takes every form submission, sticks it into form.body
app.use(methodOverride('_method')) 

// ----- global routes ----- // 
//default root route
app.get('/', function(req, res) {
    res.render("home");
});

//Controllers 
app.use('/dinosaurs', require('./routes/dinosaurs'));

app.listen(3000, function() {
    console.log("server listening on port 3000")
})