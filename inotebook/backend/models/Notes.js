const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Note",NoteSchema);