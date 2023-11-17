const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {main} = require('./db/connection');

// Creating The Main App also known as server
const app = express();

// BuiltIn Middelware
app.use(cookieParser());
app.use(express.json());
app.use(cors());



//import middleware
const userVerfication = require('./middleware/auth');

// Require Routes here
const authUserRouter = require('./routes/user.routes');
const productIteamRoutes = require('./routes/items.routes');
const adminRoutes =require('./routes/admin.routes');

// Saprate Routes
app.use('/auth', userVerfication ,authUserRouter);
app.use('/items', userVerfication ,authUserRouter);
app.use('/admin', adminRoutes);


// Database Connection
main('mongodb://127.0.0.1:27017/demodb').then((resp)=>{
  console.log("Database is sucessfull connected");
}).catch((err)=>{
  console.log(err);
})


app.listen(8000, ()=>{
    console.log("Server start on http://localhost:8000");
})
