const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
//mongodb connection
const connectDB = require('./server/database/connection')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT ||8080
// log requests
app.use(morgan('tiny'));
connectDB();
//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}));
//set view
app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname,'views/ejs'));

//require controler
const controler=require('./server/controler/controler');
const Router  = require('express');


//loads assets
app.use('/css',express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img',express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js',express.static(path.resolve(__dirname, 'assets/js ')));

//load routers
app.use('/', require('./server/routes/router'));


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
}); 
