const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {main} = require('./db/connection');
const fs = require('fs');
const path = require('path');

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
const dashboardApiCall = require('./routes/items.routes');


// Saprate Routes
app.use('/auth', authUserRouter);
// app.use('/items',  ,productIteamRoutes);
app.use('/admin', adminRoutes);
app.use('/dashboard', userVerfication, dashboardApiCall)


// Database Connection
main('mongodb://127.0.0.1:27017/demodb').then((resp)=>{
  console.log("Database is sucessfull connected");
}).catch((err)=>{
  console.log(err);
})

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), 
    (err)=>{
      res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log("The Server is lisenting on : http://localhost:"+PORT));