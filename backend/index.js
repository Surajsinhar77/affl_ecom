const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demodb');
  console.log("db connected");
}

const UserSchema = new mongoose.Schema({
    name: String,
    password: String
});

const User = mongoose.model('UserData', UserSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post('/signin', async (req, res)=>{
  let user = new User();
  const d = await User.find({name:req.body.name}).exec();
  user.name = req.body.name
  user.password = req.body.password
  // const doc = await user.save();
  console.log(d.length);
  // res.send(d)
})


server.listen(8000, ()=>{
    console.log("server started");
})
