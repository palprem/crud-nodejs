const mongoose = require('mongoose');
const connectDB= async()=>{
    try{
        const con=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
            useFindAndModify:true,
            useCreateIndex:true
        });
        console.log(`mongoDb connect:${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectDB