const express = require("express");
const app = express();

app.get("/", function(request,response){
    response.send("Hello");
});

app.get("/contact",function(req,res){
    res.send("Contact me at : saratehrishikesh17@gmail.com");
});

app.get("/about",function(req,res){
    res.send("Hey there! , This is Hrishikesh Sarate From Arthris.com , I am a full-stack Web Developer.");
});

app.get("/hobbies",function(req,res){
    res.send("Dancing,Sketching and watching movies");
})
app.listen(3000 ,function(req,res){
    console.log("Server started at port 3000");
});