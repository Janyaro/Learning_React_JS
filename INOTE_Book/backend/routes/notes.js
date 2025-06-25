const express = require('express');
const router = express.Router();
const Note = require("../models/Notes")
const fetchuser = require("../middleware/fetchuser")
const { body, validationResult } = require('express-validator');




// get all the notes of the login user 
router.get('/getallnotes',fetchuser,async(req,res)=>{
    const notes = await Note.find({user:req.user.id});
    res.json(notes)
})


// add note of the login user 

router.post('/addNote',fetchuser,
    [
        body('title').isLength({min:5}),
        body('description').isLength({min:5}),
        body('tag').notEmpty()
    ],
    async(req,res)=>{
    try {
        const {title,description,tag} = req.body;
        const error =  validationResult(req);
        if(!error.isEmpty){
            return res.status(400).send("error will occur in the code");
        }
        const note = new Note({
            title,description,tag,user:req.user.id
        });
        const savedNote = await note.save();
        res.status(200).json(savedNote)
        } catch (error) {
        
    }
})
// router is used to update the note  login required
router.put('/updateNote/:id', fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) newNote.title = title;
    if (description) newNote.description = description;
    if (tag) newNote.tag = tag;

    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send('Note not found');
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).send('Not Allowed');
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// to delete the note login required
router.delete('/deleteNote/:id',fetchuser,async (req,res)=>{
    let note = await Note.findById(req.params.id);
    if(note.user.toString() != req.user.id){
        return res.status(404).send('Not Allowed');
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).send({
        "msg":"note delete successfully",
        "note":note
    });
}) 
module.exports = router;