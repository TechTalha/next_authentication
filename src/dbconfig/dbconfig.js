import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection;

        connection.on('connected', () =>{
            console.log('MongoDB Connected SuccessFully');
        })

        connection.on('error',(err)=>{
            console.log('MongoDB Connection error' + err);
            process.exit();
        })
    } catch (error) {
        console.log("SomeThing Went Wrong");
        console.log(error);
    }
}