const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const server = express(express.json());
server.use(cors());


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
  console.log("db connected");
}

main().catch(err => console.log(err));

server.get('/', (req,res)=>{
  res.json({msg:"hello world"})
})


server.listen(8000, ()=>{
    console.log("server started");
})

require(path.join(__dirname, 'routes/user.routes'))(server);