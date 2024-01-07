const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {main} = require('./db/connection');
require('dotenv').config();
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
const productItemRoutes = require('./routes/items.routes');
const adminRoutes =require('./routes/admin.routes');
const dashboardApiCall = require('./routes/dashboard.routes');

// Saprate Routes
app.use('/auth', authUserRouter);
app.use('/items',productIteamRoutes);
app.use('/admin', adminRoutes);
app.use('/dashboard', userVerfication,dashboardApiCall)


// Database Connection
main(process.env.DATABASE_URL).then((resp)=>{
  console.log("Database is sucessfull connected");
}).catch((err)=>{
  console.log(err);
})


app.listen(8000, ()=>{
    console.log("Server start on http://localhost:8000");
})