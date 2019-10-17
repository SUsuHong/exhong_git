var express = require('express');
var app = express();
var data = require("./data.json");
// set the view engine to ejs
app.use(express.static('Photos'));

app.set('view engine', 'ejs');

app.get("/profile",function(req,res){
    // var data = {
    //     StudentID: "6030211023",
    //     Fullname : "Sulakkana Rodkuen"
    // }
    res.render('profile',{profile:data}); //ให้ใช้ร่วมกัน templem
});

app.get("/",function(req,res){
    res.render('pages/index'); //ส่วนของตรงกลาง
});
app.get("/about",function(req,res){
    res.render('pages/about',{profile:data}); //ให้ใช้ร่วมกัน templem
});
app.get("/photo",function(req,res){
    res.render('pages/photo',{profile:data}); //ส่วนของตรงกลาง
});

app.listen(8080);
console.log('Express started at http://localhost :8080');