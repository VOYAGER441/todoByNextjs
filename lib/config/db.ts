import mongoose from "mongoose"

export const ConnectDB= async()=>{
    await mongoose.connect("mongodb+srv://mainak407:xXGS1acNlBiKXfi5@cluster0.hzknj.mongodb.net/todo-app")
    console.log("😇 connecting Database...");
    
}