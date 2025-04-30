const mongoose = require('mongoose');

const url="mongodb://localhost:27017/persondb"


const client=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
con.then((result)=>{
    console.log(result)
    console.log("Connection successful")
}).catch((err)=>
{
    console.error(err)
})
