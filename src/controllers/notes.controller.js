const ctrlNotes={}
const noteModel = require('../models/note')

ctrlNotes.getNotes= async (req,res)=>{
    const notes= await noteModel.find()
    res.json(notes)
}
ctrlNotes.creteNote= async (req,res)=>{
    const {title,description,author,date} = req.body
    const newNote=  new noteModel({
        title,
        description,
        author,
        date
    })
    await newNote.save()
    res.json({message:'Note created'})
}
ctrlNotes.getNote= async (req,res)=>{
    note = await noteModel.findById(req.params.id)
    res.json(note)
}
ctrlNotes.updateNote=async (req,res)=>{
    const {title,description,author,date} = req.body
    await noteModel.findOneAndUpdate(req.params.id,{title,description,author,date})
    res.json({message:'Note updated'})
}
ctrlNotes.deleteNote=async (req,res)=>{
   await noteModel.findOneAndDelete(req.params.id)
    res.json({message:'Note deleted'})
}

module.exports=ctrlNotes