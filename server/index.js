const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {main} = require('./db/connection');
<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
=======
require('dotenv').config();
>>>>>>> 518898d19968b22717f24d3365a9ea6739f44340

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
app.use('/items',productItemRoutes);
app.use('/admin', adminRoutes);
app.use('/dashboard', userVerfication,dashboardApiCall)


// Database Connection
main(process.env.DATABASE_URL).then((resp)=>{
  console.log("Database is sucessfull connected");
}).catch((err)=>{
  console.log(err);
})

<<<<<<< HEAD
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), 
    (err)=>{
      res.status(500).send(err);
    })
})

const PORT = process.env.PORT || 8000
=======
const PORT = process.env.PORT || 8000;
>>>>>>> 518898d19968b22717f24d3365a9ea6739f44340

app.listen(PORT, ()=> console.log("The Server is lisenting on : http://localhost:"+PORT));