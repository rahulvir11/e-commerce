const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
require("./src/db/connectDB")
const user_router = require("./src/routes/userRouts");
const admin_router = require("./src/routes/adminRouts");
const cors = require("cors");
const corsOptions = {
    origin:[ 'http://localhost:5173','http://192.168.24.34:5173'],
    methods:"GET, POST, PUT, DELETE ,PATCH, HEAD",
    credentials:true
  };

app.use(cors(corsOptions));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send('welcome');
})
app.use("/api/v1",user_router);
app.use("/api/v1/admin",admin_router);


app.listen(port, () => {
    console.log(`server is runing at port ${port}`)
    
})