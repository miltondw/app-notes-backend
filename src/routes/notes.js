const { Router } =require('express')
const router = Router()
const { getNotes,creteNote,deleteNote,updateNote,getNote} = require('../controllers/notes.controller')

router.route('/')
    .get(getNotes)
    .post(creteNote)
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports=router