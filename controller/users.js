const jwt = require('jsonwebtoken');
const User = require ('../models/user');
const {jwt_SECRET } = require ('../configuration/config');

signToken = user => {
    return jwt.sign({
        iss : 'majalk' ,
        sub : user.id ,
        iat : new Date().getTime(),//current time 
        exp : new Date().setDate(new Date().getDate() + 1)//current time +1day ahead
    }, jwt_SECRET);
}

module.exports={
     signUp : async(req,res,next)=>{
        
    const {email ,password ,firstName,lastName,countryName} = req.value.body ;

    // check if there is a user with the same email 
           const founduser = User.findOne({email : email});
           if (founduser) {res.status(403).json({error : 'email is already  in use '})
        }

    //create new user
      const NewUser = new User ({
          email : email ,
          password :password ,
          firstName :firstName ,
          lastName :lastName,
          countryName :countryName
      });
          await NewUser.save();
    // generate token 
       const token = signToken(NewUser);

    //respond with token 
       res.status(200).json({token}); 
     },
     signin : async(req,res,next) => {
         //generate token 
         
     },
     secret : async(req,res,next)=>{
            console.log('i managed to get here !!');   
            res.json({secret : 'resource'}); 
    }
}