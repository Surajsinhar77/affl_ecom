const express = require('express');
const cors = require('cors');
const path = require('path');
const main = require('./db/connection');
const body = require('body-parser');


main().then(()=>{
  console.log("Db sucess connected ");
}).catch((err)=>{
  console.log("This is errot from data base :", err);
})

const server = express(express.json());
server.use(cors());
server.use(body.json());

// Routes Start from here 
require(path.join(__dirname,'/routes/user.routes'))(server);


server.listen(8000, ()=>{
    console.log("server started");
})