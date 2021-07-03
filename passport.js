const passport = require('passport');
const jwtstrategy = require('passport-jwt').Strategy;
const  {Extractjwt  ,Strategy, ExtractJwt} = require('passport-jwt');
const localStrategy = require ('passport-local');
const {jwt_SECRET} =require('./configuration/config');
const User = require('./models/user');

//json web tokens strategy 
passport.use (new jwtstrategy ({
     jwtFromRequest : ExtractJwt.fromHeader('authorization'),
     secretOrKey : jwt_SECRET
},async (payload , done )=>{
     try{
         //find the users specified in tokens 
          const user = await User.findById(payload.sub);

         //if user doesn't exist , handle it 
         if(!user){
             return done(null , false);
         }

         //otherwise , return the user 
         return done(null ,user);

     }catch(error){
         done(error ,false);
     }
}));


// local strategy 
passport.use(new localStrategy ({
    usernamefield : 'email'
}, async(email ,password , done)=>{
   //find the user given the email 
   const user = await User.findOne({email : email});

   //if not , handle it 
   if(!user)
    return done(null , false);
}))