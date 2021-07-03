const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const {validateBody , schemas}=require('../helpers/routesHelpers');


const UserController = require('../controller/users');

router.route('/signup')
.post(validateBody(schemas.authSchema), UserController.signUp)

router.route('/signin')
   .post(UserController.signin);

router.route('/secret')
   .post(passport.authenticate('jwt',{session : false}),UserController.secret); 

   module.exports = router;
