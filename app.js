const express = require ('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/users');
const mongoose = require('mongoose');


 /* mongoose.connect('mongodb+srv://authapi2:<password>@mongodb2.a3aos.mongodb.net/test',{
        useNewUrlParser: true, useUnifiedTopology:true   
}).then(()=>{
       console.log('is already connected');
});*/

mongoose.connect('mongodb://localhost/project123',{
       useNewUrlParser: true, useUnifiedTopology:true   
}).then(()=>{
       console.log('is already connected');
});



const app = express();

// middlewares 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/users',require('./routes/users'));

//start the server 
const port = process.env.port || 3000;
app.listen (port);
console.log(`server listining at ${port} `);