import mongoose, { Schema } from "mongoose";


const TodoSchema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isCompleted:{type:Boolean,default:false},
    createdAt:{type:Date,default: Date.now}
},{ versionKey: false });

const TodoModel=mongoose.models.todo ||mongoose.model("todo",TodoSchema)

export default TodoModel;