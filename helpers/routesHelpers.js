const joi = require('joi');
const {validateBody , schemas} = require('../helpers/routesHelpers');

module.exports= {
    
    validateBody :(schema) => {
            return(req,res,next )=>{

                const result = schema.validate(req.body);
               // const result = joi.validate(req.body , schema);
                if(result.error){
                    return res.status(400).json(result.error);
                }
                   if(!req.value){ req.value={};}
                   req.value['body']=result.value;
                   next();

                // req.value.body instead of req.body 
               }
            },
    
        schemas : {
          authSchema : joi.object().keys({
            email : joi.string().email().required(),       
           password : joi.string().required(),
           firstName : joi.string().min(5).max(50).required(),
           lastName : joi.string().min(5).max(50).required(),
           countryName : joi.string().min(5).max(50).required()
        })
    }
}