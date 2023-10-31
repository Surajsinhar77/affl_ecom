const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

const server = express();
server.use(cookieParser());
server.use(express.json());
server.use(cors());

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
  console.log("db connected");
}

main().catch(err => console.log(err));



server.listen(8000, ()=>{
    console.log("server started :8000");
})

require(path.join(__dirname, 'routes/user.routes'))(server);