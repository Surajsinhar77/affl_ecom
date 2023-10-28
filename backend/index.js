const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
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

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
  console.log("db connected");
}

main().catch(err => console.log(err));

// server.get('/', (req,res)=>{
//   res.json({msg:"hello world"})
// })


server.listen(8000, ()=>{
    console.log("server started");
})

require(path.join(__dirname, 'routes/user.routes'))(server);