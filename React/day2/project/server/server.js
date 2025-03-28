const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = [
{name:"Abhishek",id:1,address:"Pune"},
{  name:"Karan",id:2,address:"Satara"},
{  name:"Vinay",id:3,address:"delhi"},
{  name:"Samay",id:4,address:"Mumbai"}
]

app.get("/", (req,res)=>{
    res.json(users);
})

app.post("/adduser", (req,res)=>{
    const{id, name, address} = req.body;
    let newuser ={id, name, address};
    users.push(newuser);
    res.status(201).json({ message: "User added successfully", user: newuser });
})

app.listen(4000, (req, res)=>{
    console.log("App listening on port 4000");
})



