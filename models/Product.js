const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
quantity:{
    type:Number,
    required:true
},
status:{
    type:String,
    
},
type:{
    type:String,
    
},



})

module.exports=mongoose.model('Product',ProductSchema)