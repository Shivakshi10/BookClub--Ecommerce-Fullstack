const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc:{type:String,required:true},
        img:{type:String,required:true},
        category:{type:Array},
        author:{type:String, required:true},
        rating:{type:Number, required:true},
        language:{type:String, required:true},
        publishing:{type:String, required: true},
        price:{type:Number,required:true},
        pages:{type:Number,required:true},
        date:{type:String, required:true},
        inStock:{type:Boolean , default:true},
        tag:{type:String}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product",ProductSchema)