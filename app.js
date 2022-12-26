//jshint esversion 6
const express =require("express");
const bodypaser = require("body-parser");
const date=require(__dirname + "/date.js");

const app =express();
app.set('view engine', 'ejs');

let day = date.getDate();

app.use(express.static("public"));
app.use(bodypaser.urlencoded({extended:true}));

var addInput ="";
var items=[ "Buy Food","Cook Food","Eat Food"];
var  workItem=[];

app.get("/",function(req,res)
{
    

    

    res.render('list', 
    {
        listTitle:day,
        listitem:items
    });

});


app.post("/",function(req,res){
    
    let item =req.body.newItem;

    if(req.body.list == "Work")
    {
        workItem.push(item);
        res.redirect("/work");
    }
    else
    {
        items.push(item);
        res.redirect("/");

    }
   
});

app.get("/work",function(re,res)
{
    res.render("list",
    {
        listTitle:"Work",
        listitem:workItem
    })
})




app.listen(3000,function(){
    console.log("Server is  running on Port:3000");

});


