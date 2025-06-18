const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');



router.post('/',  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength(5)
],async (req,res)=>{
    const {name , email , password} = req.body;
   const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
        error:error.array()
    })
  }

  const user = User({
    name,
    email,
    password
  });
  await user.save().then((e) =>{
    res.json({"msg" : "user save successfully in the database"} );
  });
    
})

module.exports = router;