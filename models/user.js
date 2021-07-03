const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

//create a schema 
const userSchema = new Schema ({
   email : String ,
   password :{
       type : String ,
       required : true ,
       unique : true ,
       lowercase :true
    },

   firstName :{
       type : String,
       required :true,
       maxlength : 50 ,
       minlength : 5 
},

   lastName : {
       type : String ,
       required : true,
       maxlength : 50 ,
       minlength : 5    
    },

   countryName : {
       type : String,
       required : true ,
       maxlength : 50 ,
       minlength : 5        
    } 
})

// create a model 
const User = mongoose.model('user',userSchema);

//export the model 
module.exports = User ;