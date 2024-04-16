const mongoose = require('mongoose')
const url ="mongodb://127.0.0.1:27017/e_commerce";
mongoose.connect(url).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
})
