import mongoose from "mongoose";
const noteschema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content :{
        type :String,
        required:true
    },


}, {timestamps:true});
const note = mongoose.model("note",noteschema)
export default note; 