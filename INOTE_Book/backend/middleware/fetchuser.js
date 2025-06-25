const jwt = require('jsonwebtoken');
const jwt_secret = "mynameiswaseemjanyaro";

const fetchuser = (req,res,next)=>{
 const token = req.header("auth-token");
 if(!token){ 
return res.status(401).send("Please access with authenticate user");
 }
 try {
     const data = jwt.verify(token , jwt_secret);
     req.user = data.user;
     next();
    
 } catch (error) {
    res.status(401).send({
        "msg":"Please authenticate with correct email",
        "error":error
    })
 }
}

module.exports = fetchuser;