const {Schema,model}=require('mongoose')

const noteSchema = new Schema({
    title:String,
    description:{
        required:true,
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    author:String
},{
    timestamps:true
})

module.exports=model('note',noteSchema)