const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({
        "response":"note will successfully send",
        number:3232
    })
})

module.exports = router;