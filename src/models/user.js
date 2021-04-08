const {Schema,model} =require('mongoose')

const userShema=new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    data:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
})

module.exports=model('user',userShema)