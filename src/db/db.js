const mongoose=require('mongoose');
async function connectDB(){
    await mongoose.connect('mongodb+srv://MANAS_db_user:KawCIRClRtwOZlYN@manasbackend.nf2anxc.mongodb.net/project-1');
    console.log("DB Connected");
}


module.exports=connectDB;
