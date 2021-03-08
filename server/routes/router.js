const express = require('express');
const route = express.Router()
const services = require('../services/render');

/*
description root route
method GET
*/
route.get('/', services.homeRoutes);
/*
description root route
method GET/add-user
*/
route.get('/add-user', services.add_user);
/*
description root route
method GET/update-user
*/

route.get('/update-user', services.update_user);
const controler=require('../controler/controler')
//API
route.post('/api/users', controler.create);
route.get('/api/users', controler.find);
route.put('/api/users/:id', controler.update);
route.delete('/api/users/:id', controler.delete);

// route.get("/", function(req, res){
//     res.render('index');
// });
// route.get("/add-user", function(req, res){
//     res.render('add_user');
// });
// route.get("/update-user", function(req, res){
//     res.render('update_user');
// }); 

module.exports=route