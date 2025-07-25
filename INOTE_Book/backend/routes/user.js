const express = require('express');
const router = express.Router();
const User = require('../models/User')
const bcrypt = require("bcryptjs");
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const jwt_secret = "mynameiswaseemjanyaro";
const fetchuser = require("../middleware/fetchuser");

// post request for create the user /user/createUser
router.post('/',  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({min:5})
],async (req,res)=>{
    // fatch the data from api body
    const {name , email , password} = req.body;
    //check the variable that its validate or not or satisfy the user need or not 
   const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
        error:error.array()
    })
  }
  // find the user that the user is already exist or not 
  const useremail =await User.findOne({email : email});
  if(useremail){
   return res.status(400).json({
        "msg":"The given emaill is already exists"
    })
  }
  try {
    
    
    // generate the hash value to save the password in the database
  const salt =await bcrypt.genSalt(10);
  const secPassword = await bcrypt.hash(password,salt);
  const user = User({
    name,
    email,
    password : secPassword
  });
  // save the user in the database 
  await user.save();
 // to assign the token particular user use the jwt package
  const data = {
    user:{
      id:user.id
    }
  }
   // generate the Jwt token 
  const token = jwt.sign(data , jwt_secret);
   
  res.json({token})
} catch (error) {
    res.status(400).json(error);
  }

    
})

// post request to login a user

router.post('/login',[
  body('email').isEmail(),
  body('password').exists()
],
async (req,res)=>{
const error = validationResult(req);
if(!error.isEmpty()){
  return res.status(400).json({
    error:error.array()
  })
}
const {email , password} = req.body;
try {
  const user =await User.findOne({email});
  if(!user){
  return res.status(400).json({
    error:"please login with correct crediential"
  })
  }
  // campare the user given password into the database
  const camparePassword =await bcrypt.compare(password , user.password);
  if(!camparePassword){
     return res.status(400).json({
    error:"please login with correct crediential"
  })
  }
  const data = {
    user :{
    id:user.id
    }
  }
  console.log("User will add successfully")

  const token = jwt.sign(data , jwt_secret);
  console.log(token);
  res.status(200).json({
    token ,
   msg:"the login api will hit successfully"

   })
   
} catch (error) {
  console.log("error will occur in the code ");
}
})
// get a detail of specific user

router.post('/getUser',fetchuser,async (req,res)=>{
   try {
    const userId = req.user.id;
    const user =await  User.findById(userId).select('-password');
     res.send(user);
     } catch (error) {
    res.status(400).send({"error":error});
   }
})
// list of all connected user

router.get('/allUser',async (req,res)=>{
  try {
    const user = await User.find();
    res.status(200).json(user);
    console.log("no user available here please first add");
  } catch (error) {
    res.status(400).json(`Error will occur ${error}`)
  }
})


module.exports = router;